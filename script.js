 $(document).ready(function(){

	 var getRate = function(){
	     //Grab rate and store it in a variable
	     var bitcoinAmount = $('#bitcoinAmount').val();
	     //Check for valid input
	     if($.isNumeric(bitcoinAmount) === false){
	     	//If not valid input (not numerical), display validation message
	    	 $('#rate').html("<h1>Please enter a valid numerical input.</h1>");
	     }
	     else{
	     	 //Valid input, proceed to calculation
	     	 $('#rate').html("<h1>Loading...</h1>");
	     	 
	     	 var historic = moment().subtract(3, 'years').calendar();
			//format date to be readable by CoinDesk API
	     	 historic = moment(historic).format('YYYY-MM-DD');

	     	 // console.log(moment().subtract(30,));

	     	 var percentChanges = [];
	     	 //pull previous three years of data from today

			 callAjaxfunc(function() {
				//find average of percentChanges
	     	 	var average = 0;
	     	 	//sum
	     	 	for (var i = 0; i < percentChanges.length; i++) {
	     	 		average+=percentChanges[i];
	     	 	}
	     	 	//divide by number of percent changes
	     	 	average = average/percentChanges.length;

	     	 	//find variance
	     	 	var variance = 0;
	     	 	for (var i = 0; i < percentChanges.length; i++){
	     	 		variance += Math.pow((percentChanges[i]-average),2);
	     	 	}
	     	 	variance = variance/percentChanges.length;

	     	 	//calculate standardDeviation
	     	 	var standardDeviation = Math.sqrt(variance,2);

	     	 	// ***************************************************************
	     	 	// ADD CODE TO COMPUTE INSURANCE RATE FROM STANDARD DEVIATION HERE
	     	 	// ***************************************************************

	     	 	//tests
	     	 	console.log(percentChanges);
	     	 	console.log("average: ", average);
	     	 	console.log("variance: ", variance);
	     	 	console.log("standardDeviation: ", standardDeviation);

			 });


	     	 function callAjaxfunc(callback){
		     	 $.ajax({
	  				dataType: 'json',
	 				url: "http://api.coindesk.com/v1/bpi/historical/close.json?start="+historic+"&end="+moment().format('YYYY-MM-DD'),
	 				data: {name: name},
	 				async: false, //async request becuase call must be complete before calculations
	  				success: function(json){

		  				var date1 = moment().subtract(30, 'days').calendar();
			     	 		date1 = moment(date1).format('YYYY-MM-DD');
			     	 	var rate1 = json.bpi[date1]; //earlier rate
			     	 	
			     	 	// because current and historic APIs are distinct, the most stable
			     	 	// implementation starts with Bitcoin close price from day before use
			     	 	var date2 = moment().subtract(1, 'days');
			     	 		date2 = moment(date2).format('YYYY-MM-DD');
			     	 	var rate2 = json.bpi[date2]; //later rate
			     	 	
			     	 	percentChanges.push(percentChange(rate1,rate2));

			     	 	//calculate percent changes
			     	 	for (var i = 0; i < 732; i++) {
			     	 		date1 = moment(date1).subtract(1,'days').format('YYYY-MM-DD');
			     	 		rate1 = json.bpi[date1];
			     	 		
			     	 		date2 = moment(date2).subtract(1, 'days').format('YYYY-MM-DD');
			     	 		rate2 = json.bpi[date2];
			     	 		
			     	 		//append percent changes to array
			     	 		percentChanges.push(percentChange(rate1,rate2));
			     	 	}
			  			
			  			callback(); //callback to ensure success validity in asynchronous enviornment
		  			}
				});
		     }

	     	 // $('#rate').html("<h2>" "</h2>")
	     }
	 };

	 var percentChange = function(x,y){
	 	return (y-x)/x;
	 }

	 $('#calculate').click(getRate);
	 $('#rate').keyup(function(event){
	 	 if(event.keyCode == 13){
	    	 getRate();
	     }
	 });

});



