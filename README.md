# cascading-talib-nodejs
A wrapper for the TA-LIB wrapper for NodeJS, here: [Nodejs TA-LIB](https://github.com/oransel/node-talib). **You must have that module in order to use this one.** This gist allows one to do method cascading so that one can pick and choose all, or any, TA-LIB method to perform.

##Example Usage:
1. Include this file. This example assumes the file lives in the same directory as your application
`const tainterface = require('./talib.js');`
1. Instantiate the module
`const ta = new tainterface.talib();`
1. Feed the module your candle data. This can be any from any period you wish i.e. 1-minute, 1-hour, 30-minutes, etc.. The data type is an object of arrays i.e. marketData.open = [], marketData.high = [], marketData.low = [] etc..
`ta.marketdata = marketData;`
1. Now, you can call any function you wish and cascade, or daisy chain, them together, like this. Just remember to call ta.done(callback) at the end.
```
ta.ACCBANDS()
    .BBANDS()
    .DEMA()
    .EMA()
    .HT_TRENDLINE()
    .KAMA()
    .MA()
    .MAMA()
    .MAVP()
    .MIDPOINT()
    .MIDPRICE()
    .SAR({optInAcceleration:0.02,optInMaximum:0.2})
    .SAREXT()
    .SMA()
    .T3()
    .TEMA()
    .TRIMA()
    .WMA()
    .ATR()
    .NATR()
    .TRANGE()
    .done(function(marketdata,signals){

        console.log(JSON.stringify(signals,null,10));
    });
```
1. You can also set the options for each individual function by passing an object as seen in the .SAR({optInAcceleration:0.02,optInMaximum:0.2}) example above.
1. Put all together:
```
const tainterface = require('./talib.js');
const ta = new tainterface.talib();

var marketData = {

    market: market,
    timestamp: [],
    open: [],
    close: [],
    high: [],
    low: [],
    volume: []
};

ta.marketdata = marketData;

ta.ACCBANDS()
    .BBANDS()
    .DEMA()
    .EMA()
    .HT_TRENDLINE()
    .KAMA()
    .MA()
    .MAMA()
    .MAVP()
    .MIDPOINT()
    .MIDPRICE()
    .SAR({optInAcceleration:0.02,optInMaximum:0.2})
    .SAREXT()
    .SMA()
    .T3()
    .TEMA()
    .TRIMA()
    .WMA()
    .ATR()
    .NATR()
    .TRANGE()
    .done(function(marketdata,signals){

        console.log(JSON.stringify(signals,null,10));
    });
```
1. You can certainly call all of the methods, like this:
```
ta.ACCBANDS()
    /*.BBANDS()
    .DEMA()
    .EMA()
    .HT_TRENDLINE()
    .KAMA()
    .MA()
    .MAMA()
    .MAVP()
    .MIDPOINT()
    .MIDPRICE()
    .SAR({optInAcceleration:0.02,optInMaximum:0.2})
    .SAREXT()
    .SMA()
    .T3()
    .TEMA()
    .TRIMA()
    .WMA()
    .ATR()
    .NATR()
    .TRANGE()
    .ADX()
    .ADXR()
    .APO()
    .AROON()
    .AROONOSC()
    .BOP()
    .CCI()
    .CMO()
    .DX()
    .IMI()
    .MACD()
    .MACDEXT()
    .MACDFIX()
    .MFI()
    .MINUS_DI()
    .MINUS_DM()
    .MOM()
    .PLUS_DI()
    .PLUS_DM()
    .PPO()
    .ROC()
    .ROCP()
    .ROCR()
    .ROCR100()
    .RSI()
    .STOCH()
    .STOCHF()
    .STOCHRSI()
    .TRIX()
    .ULTOSC()
    .WILLR()
    .HT_DCPERIOD()
    .HT_DCPHASE()
    .HT_PHASOR()
    .HT_SINE()
    .HT_TRENDMODE()
    .AD()
    .ADOSC()
    .OBV()
    .CDL2CROWS()
    .CDL3BLACKCROWS()
    .CDL3INSIDE()
    .CDL3LINESTRIKE()
    .CDL3OUTSIDE()
    .CDL3STARSINSOUTH()
    .CDL3WHITESOLDIERS()
    .CDLABANDONEDBABY()
    .CDLADVANCEBLOCK()
    .CDLBELTHOLD()
    .CDLBREAKAWAY()
    .CDLCLOSINGMARUBOZU()
    .CDLCONCEALBABYSWALL()
    .CDLCOUNTERATTACK()
    .CDLDARKCLOUDCOVER()
    .CDLDOJI()
    .CDLDOJISTAR()
    .CDLDRAGONFLYDOJI()
    .CDLENGULFING()
    .CDLEVENINGDOJISTAR()
    .CDLEVENINGSTAR()
    .CDLGAPSIDESIDEWHITE()
    .CDLGRAVESTONEDOJI()
    .CDLHAMMER()
    .CDLHANGINGMAN()
    .CDLHARAMI()
    .CDLHARAMICROSS()
    .CDLHIGHWAVE()
    .CDLHIKKAKE()
    .CDLHIKKAKEMOD()
    .CDLHOMINGPIGEON()
    .CDLIDENTICAL3CROWS()
    .CDLINNECK()
    .CDLINVERTEDHAMMER()
    .CDLKICKING()
    .CDLKICKINGBYLENGTH()
    .CDLLADDERBOTTOM()
    .CDLLONGLEGGEDDOJI()
    .CDLLONGLINE()
    .CDLMARUBOZU()
    .CDLMATCHINGLOW()
    .CDLMATHOLD()
    .CDLMORNINGDOJISTAR()
    .CDLMORNINGSTAR()
    .CDLONNECK()
    .CDLPIERCING()
    .CDLRICKSHAWMAN()
    .CDLRISEFALL3METHODS()
    .CDLSEPARATINGLINES()
    .CDLSHOOTINGSTAR()
    .CDLSHORTLINE()
    .CDLSPINNINGTOP()
    .CDLSTALLEDPATTERN()
    .CDLSTICKSANDWICH()
    .CDLTAKURI()
    .CDLTASUKIGAP()
    .CDLTHRUSTING()
    .CDLTRISTAR()
    .CDLUNIQUE3RIVER()
    .CDLUPSIDEGAP2CROWS()
    .CDLXSIDEGAP3METHODS()
    .BETA()
    .CORREL()
    .LINEARREG()
    .LINEARREG_ANGLE()
    .LINEARREG_INTERCEPT()
    .LINEARREG_SLOPE()
    .STDDEV()
    .TSF()
    .VAR()
    .AVGPRICE()
    .AVGDEV()
    .MEDPRICE()
    .TYPPRICE()
    .WCLPRICE()
    .done(function(marketdata,signals){

        console.log(JSON.stringify(signals,null,10));
    });
```
What one ends up with is an object of arrays of objects. Interpretation is left up to you, still, but now it's a lot easier to call many methods.

One can also use the *explain* function of the original wrapper like this:
`ta.explain = function("STDDEV");`

###NOTE:###
Version 1.0.5 of the TA-LIB wrapper has a bug where the TA_IMI and TA_AVGDEV functions do not work. See: https://github.com/oransel/node-talib/issues/39
