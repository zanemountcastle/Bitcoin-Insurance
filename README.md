#Bitcoin Insurance

This project establishes a technique for pricing insurance for Bitcoins. The technique was developed by [Dan Mountcastle](https://uk.linkedin.com/in/daniel-mountcastle-16218160). This project is a collaboration with Dan Mountcastle.

For a full economic analysis, please see the original paper [here](https://github.com/zanemountcastle/bitcoin-insurance/blob/master/Remittances%2C%20Cryptocurrency%2C%20and%20Insurance.pdf).

## Problem

On one hand, a decentralized cryptocurrency shared on a pubic ledger such as [Bitcoin](https://bitcoin.org/en/) offers tremendous potential for individuals in developing countries to store monetary assets. On the other hand, the historic volatility of the currency precludes significant investment in the interest of conservative financial planning.

In order to maximize the potential for the cryptocurrency in developing countries, a technique must be developed that protects individuals from the volatility of the cryptocurrency. This major disadvantage of Bitcoin prohibits impoverished individuals from investing heavily.

## Solution

The paper and this script are moves towards a solution to this problem. The insurance rates can be calculated to protect individuals, especially those with limited income, from major negative fluctuations in the worth of their Bitcoins.

Using the CoinBase API for historic Bitcoin prices, the script maintains an up-to-date client-side service for determining Bitcoin Insurance pricing.

## Resources 
- [Coinbase](https://developers.coinbase.com/) for the Bitcoin pricing API
- [jQuery](https://jquery.com/) for DOM manipulation
- [Moment.js](http://momentjs.com/) for date arithmetic

## License

The MIT License

Copyright (c) 2016 Zane Mountcastle

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
