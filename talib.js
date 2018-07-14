const ta = require('talib');

function talibInterface(){

    var talib = this;

    talib.signals = {};

    talib.marketdata = {};

    talib.options = {

        debug: false,
    }

    const optInMAType = {

        SMA: 0,
        EMA: 1,
        WMA: 2,
        DEMA: 3,
        TEMA: 4,
        TRIMA: 5,
        KAMA: 6,
        MAMA: 7,
        T3: 8
    };

    talib.ACCBANDS = function (options){

        ta.execute({
            name: "ACCBANDS",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 20)
        }, function (err, result){

            var data = {
                
                outrealupperband: result.result.outRealUpperBand,
                outrealmiddleband: result.result.outRealMiddleBand,
                outreallowerband: result.result.outRealLowerBand,
            };

            talib.populateSignals("accbands", data);
        });

        return talib;
    }

    talib.BBANDS = function (options){

        ta.execute({
            name: "BBANDS",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 5),
            optInNbDevUp: ((options != undefined && options.optInNbDevUp !== undefined) ? options.optInNbDevUp: 2),
            optInNbDevDn: ((options != undefined && options.optInNbDevDn !== undefined) ? options.optInNbDevDn: 2),
            optInMAType: ((options != undefined && options.optInMAType !== undefined) ? options.optInMAType: 0),
        }, function (err, result){

            var data = {
                
                outrealupperband: result.result.outRealUpperBand,
                outrealmiddleband: result.result.outRealMiddleBand,
                outreallowerband: result.result.outRealLowerBand,
            };

            talib.populateSignals("bbands", data);

        });

        return talib;
    }

    talib.DEMA = function (options){

        ta.execute({
            name: "DEMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("dema", result.result.outReal);

        });

        return talib;
    }

    talib.EMA = function (options){

        ta.execute({
            name: "EMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("ema", result.result.outReal);

        });

        return talib;
    }

    talib.HT_TRENDLINE = function (options){

        ta.execute({
            name: "HT_TRENDLINE",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("ht_trendline", result.result.outReal);

        });

        return talib;
    }

    talib.KAMA = function (options){

        ta.execute({
            name: "KAMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("kama", result.result.outReal);

        });

        return talib;
    }

    talib.MA = function (options){

        ta.execute({
            name: "MA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
            optInMAType: ((options != undefined && options.optInMAType !== undefined) ? options.optInMAType: 0),
        }, function (err, result){

            talib.populateSignals("ma", result.result.outReal);

        });

        return talib;
    }

    talib.MAMA = function (options){

        ta.execute({
            name: "MAMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInFastLimit: ((options != undefined && options.optInFastLimit !== undefined) ? options.optInFastLimit: 0.5),
            optInSlowLimit: ((options != undefined && options.optInSlowLimit !== undefined) ? options.optInSlowLimit: 0.05),
        }, function (err, result){

            var data = {

                outmama: result.result.outMAMA,
                outfama: result.result.outFAMA
            };

            talib.populateSignals("mama", data);

        });

        return talib;
    }

    talib.MAVP = function (options){

        ta.execute({
            name: "MAVP",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            inPeriods: ((options != undefined && options.optInPeriods !== undefined) ? options.optInPeriods: [2]),
            optInMinPeriod: ((options != undefined && options.optInMinPeriod !== undefined) ? options.optInMinPeriod: 2),
            optInMaxPeriod: ((options != undefined && options.optInMaxPeriod !== undefined) ? options.optInMaxPeriod: 30),
            optInMAType: ((options != undefined && options.optInMAType !== undefined) ? options.optInMAType: 0),
        }, function (err, result){

            talib.populateSignals("mavp", result.result.outReal);

        });

        return talib;
    }

    talib.MIDPOINT = function (options){

        ta.execute({
            name: "MIDPOINT",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("midpoint", result.result.outReal);

        });

        return talib;
    }

    talib.MIDPRICE = function (options){

        ta.execute({
            name: "MIDPRICE",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("midprice", result.result.outReal);

        });

        return talib;
    }

    talib.SAR = function (options){

        ta.execute({
            name: "SAR",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInAcceleration: ((options != undefined && options.optInAccelleration !== undefined) ? options.optInAcceleration:0.03),
            optInMaximum: ((options != undefined && options.optInMaximum !== undefined) ? options.optInMaximum:0.1)

        }, function (err, result){

                if(talib.signals[talib.marketdata.market] == undefined){

                    talib.signals[talib.marketdata.market] = {};
                }

                if(talib.signals[talib.marketdata.market].sar == undefined){

                    talib.signals[talib.marketdata.market]['sar'] = [];
                }

                talib.signals[talib.marketdata.market].sar = {data: result.result.outReal};

                if(talib.signals[talib.marketdata.market].sar.market == undefined){

                    talib.signals[talib.marketdata.market].sar['market'] = '';
                }

                talib.signals[talib.marketdata.market].sar['market'] = talib.marketdata.market;

                if(talib.signals[talib.marketdata.market].sar.deltas == undefined){

                    talib.signals[talib.marketdata.market].sar['deltas'] = [];
                }

                if(talib.signals[talib.marketdata.market].sar.signals == undefined){

                    talib.signals[talib.marketdata.market].sar['signals'] = [];
                }

                for( i = 0; i < (talib.marketdata.close.length - 1); i++){

                    if(talib.signals[talib.marketdata.market].sar.data[i] > talib.marketdata.close[i]){

                        talib.signals[talib.marketdata.market].sar.deltas.push( 1 - (talib.marketdata.close[i] / talib.signals[talib.marketdata.market].sar.data[i]));

                        talib.signals[talib.marketdata.market].sar.signals.push(0);

                    }else if (talib.signals[talib.marketdata.market].sar.data[i] < talib.marketdata.close[i]){

                        talib.signals[talib.marketdata.market].sar.deltas.push( 1 - (talib.signals[talib.marketdata.market].sar.data[i] / talib.marketdata.close[i]));

                        talib.signals[talib.marketdata.market].sar.signals.push(1);

                    }else if (talib.signals[talib.marketdata.market].sar.data[i] == talib.marketdata.close[i]){

                        talib.signals[talib.marketdata.market].sar.deltas.push( 1 - (talib.signals[talib.marketdata.market].sar.data[i] / talib.marketdata.close[i]));

                        if(talib.signals[talib.marketdata.market].sar.signals[i] === 0){

                            talib.signals[talib.marketdata.market].sar.signals.push(1);

                        }else{

                            talib.signals[talib.marketdata.market].sar.signals.push(0);
                        }
                    }
                }

                if(this.debug){

                    console.log("TA: Processed Parabolic SAR");
                }

        });

        return talib;
    }

    talib.SAREXT = function (options){

        ta.execute({
            name: "SAREXT",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInStartValue: ((options != undefined && options.optInStartValue !== undefined) ? options.optInStartValue: 0),
            optInOffsetOnReverse: ((options != undefined && options.optInOffsetOnReverse !== undefined) ? options.optInOffsetOnReverse: 0),
            optInAccelerationInitLong: ((options != undefined && options.optInAccelerationInitLong !== undefined) ? options.optInAccelerationInitLong: 0.02),
            optInAccelerationLong: ((options != undefined && options.optInAccelerationLong !== undefined) ? options.optInAccelerationLong: 0.02),
            optInAccelerationMaxLong: ((options != undefined && options.optInAccelerationMaxLong !== undefined) ? options.optInAccelerationMaxLong: 0.2),
            optInAccelerationInitShort: ((options != undefined && options.optInAccelerationInitShort !== undefined) ? options.optInAccelerationInitShort: 0.02),
            optInAccelerationShort: ((options != undefined && options.optInAccelerationShort !== undefined) ? options.optInAccelerationShort: 0.02),
            optInAccelerationMaxShort: ((options != undefined && options.optInAccelerationMaxShort !== undefined) ? options.optInAccelerationMaxShort: 0.2),
        }, function (err, result){

            talib.populateSignals("sarext", result.result.outReal);

            if(talib.signals[talib.marketdata.market].sarext.deltas == undefined){

                talib.signals[talib.marketdata.market].sarext['deltas'] = [];
            }

            if(talib.signals[talib.marketdata.market].sarext.signals == undefined){

                talib.signals[talib.marketdata.market].sarext['signals'] = [];
            }

            for( i = 0; i < (talib.marketdata.close.length - 1); i++){

                if(talib.signals[talib.marketdata.market].sarext.data[i] > talib.marketdata.close[i]){

                    talib.signals[talib.marketdata.market].sarext.deltas.push( 1 - (talib.marketdata.close[i] / talib.signals[talib.marketdata.market].sarext.data[i]));

                    talib.signals[talib.marketdata.market].sarext.signals.push(0);

                }else if (talib.signals[talib.marketdata.market].sarext.data[i] < talib.marketdata.close[i]){

                    talib.signals[talib.marketdata.market].sarext.deltas.push( 1 - (talib.signals[talib.marketdata.market].sarext.data[i] / talib.marketdata.close[i]));

                    talib.signals[talib.marketdata.market].sarext.signals.push(1);

                }else if (talib.signals[talib.marketdata.market].sarext.data[i] == talib.marketdata.close[i]){

                    talib.signals[talib.marketdata.market].sarext.deltas.push( 1 - (talib.signals[talib.marketdata.market].sarext.data[i] / talib.marketdata.close[i]));

                    if(talib.signals[talib.marketdata.market].sarext.signals[i] === 0){

                        talib.signals[talib.marketdata.market].sarext.signals.push(1);

                    }else{

                        talib.signals[talib.marketdata.market].sarext.signals.push(0);
                    }
                }
            }

        });

        return talib;
    }

    talib.SMA = function (options){

        ta.execute({
            name: "SMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("sma", result.result.outReal);

            });

return talib;
    }

    talib.T3 = function (options){

        ta.execute({
            name: "T3",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 5),
            optInVFactor: ((options != undefined && options.optInVFactor !== undefined) ? options.optInVFactor: 0.7),
        }, function (err, result){

            talib.populateSignals("t3", result.result.outReal);

        });

        return talib;
    }

    talib.TEMA = function (options){

        ta.execute({
            name: "TEMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("tema", result.result.outReal);

        });

        return talib;
    }

    talib.TRIMA = function (options){

        ta.execute({
            name: "TRIMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("trima", result.result.outReal);

        });

        return talib;
    }

    talib.WMA = function (options){

        ta.execute({
            name: "WMA",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("wma", result.result.outReal);

        });

        return talib;
    }

    talib.ATR = function (options){

        ta.execute({
            name: "ATR",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("atr", result.result.outReal);

        });

        return talib;
    }

    talib.NATR = function (options){

        ta.execute({
            name: "NATR",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("natr", result.result.outReal);

        });

        return talib;
    }

    talib.TRANGE = function (options){

        ta.execute({
            name: "TRANGE",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("trange", result.result.outReal);

        });

        return talib;
    }

    talib.ADX = function (options){

        ta.execute({
            name: "ADX",
            startIdx: 0,
            endIdx: talib.marketdata.low.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 9)
        }, function (err, result){

            talib.populateSignals("adx", result.result.outReal);

        });

        return talib;
    }

    talib.ADXR = function(options){

        ta.execute({
            name: "ADXR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("adxr", result.result.outReal);

        });

        return talib;
    }

    talib.APO = function(options){

        ta.execute({
            name: "APO",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInFastPeriod: ((options !== undefined && options.optInFastPeriod !== undefined) ? options.optInFastPeriod:12),
            optInSlowPeriod: ((options != undefined && options.optInSlowPeriod !== undefined) ? options.optInSlowPeriod: 26),
            optInMAType: ((options != undefined && options.optInMAType !== undefined) ? options.optInMAType: 0),
        }, function (err, result){

            talib.populateSignals("apo", result.result.outReal);

        });

        return talib;
    }

    talib.AROON = function(options){

        ta.execute({
            name: "AROON",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("aroon", {down: result.result.outAroonDown,up: result.result.outAroonUp});

        });

        return talib;
    }

    talib.AROONOSC = function(options){

        ta.execute({
            name: "AROONOSC",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("aroonosc", result.result.outReal);

        });

        return talib;
    }

    talib.BOP = function(options){

        ta.execute({
            name: "BOP",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close
        }, function (err, result){

            talib.populateSignals("bop", result.result.outReal);

        });

        return talib;
    }

    talib.CCI = function(options){

        ta.execute({
            name: "CCI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("cci", result.result.outReal);

        });

        return talib;
    }

    talib.CMO = function(options){

        ta.execute({
            name: "CMO",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("cmo", result.result.outReal);

        });

        return talib;
    }

    talib.DX = function(options){

        ta.execute({
            name: "DX",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("dx", result.result.outReal);

        });

        return talib;
    }

    talib.IMI = function(options){

        ta.execute({
            name: "IMI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("imi", result.result.outReal);

        });

        return talib;
    }

    talib.MACD = function(options){

        ta.execute({
            name: "MACD",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            volume: talib.marketdata.volume,
            optInFastPeriod: ((options !== undefined && options.optInFastPeriod !== undefined) ? options.optInFastPeriod:12),
            optInSlowPeriod: ((options != undefined && options.optInSlowPeriod !== undefined) ? options.optInSlowPeriod: 26),
            optInSignalPeriod: ((options != undefined && options.optInSignalPeriod !== undefined) ? options.optInSignalPeriod: 9),
        }, function (err, result){

            var data = {

                macd: result.result.outMACD,
                macdsignal: result.result.outMACDSignal,
                macdhist: result.result.outMACDHist
            };

            talib.populateSignals("macd", data);

        });

        return talib;
    }

    talib.MACDEXT = function(options){

        ta.execute({
            name: "MACDEXT",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInFastPeriod: ((options !== undefined && options.optInFastPeriod !== undefined) ? options.optInFastPeriod:12),
            optInFastMAType: ((options != undefined && options.optInFastMAType !== undefined) ? options.optInFastMAType: 0),
            optInSlowPeriod: ((options != undefined && options.optInSlowPeriod !== undefined) ? options.optInSlowPeriod: 26),
            optInSlowMAType: ((options != undefined && options.optInSlowMAType !== undefined) ? options.optInSlowMAType: 0),
            optInSignalPeriod: ((options != undefined && options.optInSignalPeriod !== undefined) ? options.optInSignalPeriod: 9),
            optInSignalMAType: ((options != undefined && options.optInSignalMAType !== undefined) ? options.optInSignalMAType: 0),
        }, function (err, result){

            var data = {

                macd: result.result.outMACD,
                macdsignal: result.result.outMACDSignal,
                macdhist: result.result.outMACDHist
            };

            talib.populateSignals("macdext", data);

        });

        return talib;
    }

    talib.MACDFIX = function(options){

        ta.execute({
            name: "MACDFIX",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInSignalPeriod: ((options != undefined && options.optInSignalPeriod !== undefined) ? options.optInSignalPeriod: 9),
        }, function (err, result){

            var data = {

                macd: result.result.outMACD,
                macdsignal: result.result.outMACDSignal,
                macdhist: result.result.outMACDHist
            };

            talib.populateSignals("macdfix", data);

        });

        return talib;
    }

    talib.MFI = function(options){

        ta.execute({
            name: "MFI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            volume: talib.marketdata.volume,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("mfi", result.result.outReal);

        });

        return talib;
    }

    talib.MINUS_DI = function(options){

        ta.execute({
            name: "MINUS_DI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("minus_di", result.result.outReal);

        });

        return talib;
    }

    talib.MINUS_DM = function(options){

        ta.execute({
            name: "MINUS_DM",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("minus_dm", result.result.outReal);

        });

        return talib;
    }

    talib.MOM = function(options){

        ta.execute({
            name: "MOM",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("mom", result.result.outReal);

        });

        return talib;
    }

    talib.PLUS_DI = function(options){

        ta.execute({
            name: "PLUS_DI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("plus_di", result.result.outReal);

        });

        return talib;
    }

    talib.PLUS_DM = function(options){

        ta.execute({
            name: "PLUS_DM",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("plus_dm", result.result.outReal);

        });

        return talib;
    }

    talib.PPO = function(options){

        ta.execute({
            name: "PPO",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInFastPeriod: ((options != undefined && options.optInFastPeriod !== undefined) ? options.optInFastPeriod: 12),
            optInSlowPeriod: ((options != undefined && options.optInSlowPeriod !== undefined) ? options.optInSlowPeriod: 26),
            optInMAType: ((options != undefined && options.optInMAType !== undefined) ? options.optInMAType: 0),
        }, function (err, result){

            talib.populateSignals("ppo", result.result.outReal);

        });

        return talib;
    }

    talib.ROC = function(options){

        ta.execute({
            name: "ROC",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 10)
        }, function (err, result){

            talib.populateSignals("roc", result.result.outReal);

        });

        return talib;
    }

    talib.ROCP = function(options){

        ta.execute({
            name: "ROCP",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 10)
        }, function (err, result){

            talib.populateSignals("rocp", result.result.outReal);

        });

        return talib;
    }

    talib.ROCR = function(options){

        ta.execute({
            name: "ROCR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 10)
        }, function (err, result){

            talib.populateSignals("rocr", result.result.outReal);

        });

        return talib;
    }

    talib.ROCR100 = function(options){

        ta.execute({
            name: "ROCR100",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 10)
        }, function (err, result){

            talib.populateSignals("rocr100", result.result.outReal);

        });

        return talib;
    }

    talib.RSI = function(options){

        ta.execute({
            name: "RSI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("rsi", result.result.outReal);

        });

        return talib;
    }

    talib.STOCH = function(options){

        ta.execute({
            name: "STOCH",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInFastK_Period: ((options != undefined && options.optInFastK_Period !== undefined) ? options.optInFastK_Period: 5),
            optInSlowK_Period: ((options != undefined && options.optInSlowK_Period !== undefined) ? options.optInSlowK_Period: 3),
            optInSlowK_MAType: ((options != undefined && options.optInSlowK_MAType !== undefined) ? options.optInSlowK_MAType: 0),
            optInSlowD_Period: ((options != undefined && options.optInSlowD_Period !== undefined) ? options.optInSlowD_Period: 3),
            optInSlowD_MAType: ((options != undefined && options.optInSlowD_MAType !== undefined) ? options.optInSlowD_MAType: 0),
        }, function (err, result){

            var data = {

                outslowk: result.result.outSlowK,

                outslowd: result.result.outSlowD
            };

            talib.populateSignals("stoch", data);

        });

        return talib;
    }

    talib.STOCHF = function(options){

        ta.execute({
            name: "STOCHF",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInFastK_Period: ((options != undefined && options.optInFastK_Period !== undefined) ? options.optInFastK_Period: 5),
            optInFastD_Period: ((options != undefined && options.optInFastD_Period !== undefined) ? options.optInFastD_Period: 3),
            optInFastD_MAType: ((options != undefined && options.optInFastD_MAType !== undefined) ? options.optInFastD_MAType: 0),
        }, function (err, result){

            var data = {

                outfastk: result.result.outFastK,

                outfastd: result.result.outFastD
            };

            talib.populateSignals("stochf", data);

        });

        return talib;
    }

    talib.STOCHRSI = function(options){

        ta.execute({
            name: "STOCHRSI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
            optInFastK_Period: ((options != undefined && options.optInFastK_Period !== undefined) ? options.optInFastK_Period: 5),
            optInFastD_Period: ((options != undefined && options.optInFastD_Period !== undefined) ? options.optInFastD_Period: 3),
            optInFastD_MAType: ((options != undefined && options.optInFastD_MAType !== undefined) ? options.optInFastD_MAType: 0),
        }, function (err, result){

            var data = {

                outfastk: result.result.outFastK,

                outfastd: result.result.outFastD
            };

            talib.populateSignals("stochrsi", data);

        });

        return talib;
    }

    talib.TRIX = function(options){

        ta.execute({
            name: "TRIX",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),

        }, function (err, result){

            talib.populateSignals("stochrsi", result.result.outReal);

        });

        return talib;
    }

    talib.ULTOSC = function(options){

        ta.execute({
            name: "ULTOSC",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod1: ((options != undefined && options.optInTimePeriod1 !== undefined) ? options.optInTimePeriod1: 7),
            optInTimePeriod2: ((options != undefined && options.optInTimePeriod2 !== undefined) ? options.optInTimePeriod2: 14),
            optInTimePeriod3: ((options != undefined && options.optInTimePeriod3 !== undefined) ? options.optInTimePeriod3: 28),
        }, function (err, result){

            talib.populateSignals("ultosc", result.result.outReal);

        });

        return talib;
    }

    talib.WILLR = function(options){

        ta.execute({
            name: "WILLR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14)
        }, function (err, result){

            talib.populateSignals("willr", result.result.outReal);

        });

        return talib;
    }

    talib.HT_DCPERIOD = function(options){

        ta.execute({
            name: "HT_DCPERIOD",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("ht_dcperiod", result.result.outReal);

        });

        return talib;
    }

    talib.HT_DCPHASE = function(options){

        ta.execute({
            name: "HT_DCPHASE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("ht_dcphase", result.result.outReal);

        });

        return talib;
    }

    talib.HT_PHASOR = function(options){

        ta.execute({
            name: "HT_PHASOR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
        }, function (err, result){

            var data = {

                outinphase: result.result.outInPhase,
                outquadrature: result.result.outQuadrature
            };

            talib.populateSignals("ht_phasor", data);

        });

        return talib;
    }

    talib.HT_SINE = function(options){

        ta.execute({
            name: "HT_SINE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
        }, function (err, result){

            var data = {

                outsine: result.result.outSine,
                outleadsine: result.result.outLeadSine
            };

            talib.populateSignals("ht_sine", data);

        });

        return talib;
    }

    talib.HT_TRENDMODE = function(options){

        ta.execute({
            name: "HT_TRENDMODE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("ht_trendmode", result.result.outInteger);

        });

        return talib;
    }

    talib.AD = function(options){

        ta.execute({
            name: "AD",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            volume: talib.marketdata.volume
        }, function (err, result){

            talib.populateSignals("ad", result.result.outReal);

        });

        return talib;
    }

    talib.ADOSC = function(options){

        ta.execute({
            name: "ADOSC",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            volume: talib.marketdata.volume,
            optInFastPeriod: ((options != undefined && options.optInFastPeriod !== undefined) ? options.optInFastPeriod: 3),
            optInSlowPeriod: ((options != undefined && options.optInSlowPeriod !== undefined) ? options.optInSlowPeriod: 10),
        }, function (err, result){

            talib.populateSignals("adosc", result.result.outReal);

        });

        return talib;
    }

    talib.OBV = function(options){

        ta.execute({
            name: "OBV",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            volume: talib.marketdata.volume
        }, function (err, result){

            talib.populateSignals("obv", result.result.outReal);

        });

        return talib;
    }

    talib.CDL2CROWS = function(options){

        ta.execute({
            name: "CDL2CROWS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdl2crows", result.result.outInteger);

        });

        return talib;
    }

    talib.CDL3BLACKCROWS = function(options){

        ta.execute({
            name: "CDL3BLACKCROWS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdl3blackcrows", result.result.outInteger);

        });

        return talib;
    }

    talib.CDL3INSIDE = function(options){

        ta.execute({
            name: "CDL3INSIDE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdl3inside", result.result.outInteger);

        });

        return talib;
    }

    talib.CDL3LINESTRIKE = function(options){

        ta.execute({
            name: "CDL3LINESTRIKE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdl3linestrike", result.result.outInteger);

        });

        return talib;
    }

    talib.CDL3OUTSIDE = function(options){

        ta.execute({
            name: "CDL3OUTSIDE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdl3outside", result.result.outInteger);

        });

        return talib;
    }

    talib.CDL3STARSINSOUTH = function(options){

        ta.execute({
            name: "CDL3STARSINSOUTH",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdl3starsinsouth", result.result.outInteger);

        });

        return talib;
    }

    talib.CDL3WHITESOLDIERS = function(options){

        ta.execute({
            name: "CDL3WHITESOLDIERS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdl3whitesoldiers", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLABANDONEDBABY = function(options){

        ta.execute({
            name: "CDLABANDONEDBABY",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInPenetration: ((options != undefined && options.optInPenetration !== undefined) ? options.optInPenetration: 0.3),
        }, function (err, result){

            talib.populateSignals("cdlabandonedbaby", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLADVANCEBLOCK = function(options){

        ta.execute({
            name: "CDLADVANCEBLOCK",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdladvanceblock", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLBELTHOLD = function(options){

        ta.execute({
            name: "CDLBELTHOLD",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlbelthold", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLBREAKAWAY = function(options){

        ta.execute({
            name: "CDLBREAKAWAY",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlbreakaway", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLCLOSINGMARUBOZU = function(options){

        ta.execute({
            name: "CDLCLOSINGMARUBOZU",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlclosingmarubozu", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLCONCEALBABYSWALL = function(options){

        ta.execute({
            name: "CDLCONCEALBABYSWALL",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlconcealbabyswall", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLCOUNTERATTACK = function(options){

        ta.execute({
            name: "CDLCOUNTERATTACK",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlcounterattack", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLDARKCLOUDCOVER = function(options){

        ta.execute({
            name: "CDLDARKCLOUDCOVER",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInPenetration: ((options != undefined && options.optInPenetration !== undefined) ? options.optInPenetration: 0.5),
        }, function (err, result){

            talib.populateSignals("cdldarkcloudcover", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLDOJI = function(options){

        ta.execute({
            name: "CDLDOJI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdldoji", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLDOJISTAR = function(options){

        ta.execute({
            name: "CDLDOJISTAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdldojistar", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLDRAGONFLYDOJI = function(options){

        ta.execute({
            name: "CDLDRAGONFLYDOJI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdldragonflydoji", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLENGULFING = function(options){

        ta.execute({
            name: "CDLENGULFING",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlengulfing", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLEVENINGDOJISTAR = function(options){

        ta.execute({
            name: "CDLEVENINGDOJISTAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInPenetration: ((options != undefined && options.optInPenetration !== undefined) ? options.optInPenetration: 0.3),
        }, function (err, result){

            talib.populateSignals("cdleveningdojistar", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLEVENINGSTAR = function(options){

        ta.execute({
            name: "CDLEVENINGSTAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInPenetration: ((options != undefined && options.optInPenetration !== undefined) ? options.optInPenetration: 0.3),
        }, function (err, result){

            talib.populateSignals("cdleveningstar", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLGAPSIDESIDEWHITE = function(options){

        ta.execute({
            name: "CDLGAPSIDESIDEWHITE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlgapsidesidewhite", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLGRAVESTONEDOJI = function(options){

        ta.execute({
            name: "CDLGRAVESTONEDOJI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlgravestonedoji", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHAMMER = function(options){

        ta.execute({
            name: "CDLHAMMER",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlhammer", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHANGINGMAN = function(options){

        ta.execute({
            name: "CDLHANGINGMAN",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlhangingman", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHARAMI = function(options){

        ta.execute({
            name: "CDLHARAMI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlharami", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHARAMICROSS = function(options){

        ta.execute({
            name: "CDLHARAMICROSS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlharamicross", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHIGHWAVE = function(options){

        ta.execute({
            name: "CDLHIGHWAVE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlhighwave", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHIKKAKE = function(options){

        ta.execute({
            name: "CDLHIKKAKE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlhikkake", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHIKKAKEMOD = function(options){

        ta.execute({
            name: "CDLHIKKAKEMOD",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlhikkakemod", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLHOMINGPIGEON = function(options){

        ta.execute({
            name: "CDLHOMINGPIGEON",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlhomingpigeon", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLIDENTICAL3CROWS = function(options){

        ta.execute({
            name: "CDLIDENTICAL3CROWS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlidentical3crows", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLINNECK = function(options){

        ta.execute({
            name: "CDLINNECK",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlinneck", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLINVERTEDHAMMER = function(options){

        ta.execute({
            name: "CDLINVERTEDHAMMER",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlinvertedhammer", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLKICKING = function(options){

        ta.execute({
            name: "CDLKICKING",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlkicking", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLKICKINGBYLENGTH = function(options){

        ta.execute({
            name: "CDLKICKINGBYLENGTH",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlkickingbylength", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLLADDERBOTTOM = function(options){

        ta.execute({
            name: "CDLLADDERBOTTOM",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlladderbottom", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLLONGLEGGEDDOJI = function(options){

        ta.execute({
            name: "CDLLONGLEGGEDDOJI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdllongleggeddoji", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLLONGLINE = function(options){

        ta.execute({
            name: "CDLLONGLINE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdllongline", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLMARUBOZU = function(options){

        ta.execute({
            name: "CDLMARUBOZU",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlmarubozu", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLMATCHINGLOW = function(options){

        ta.execute({
            name: "CDLMATCHINGLOW",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlmatchinglow", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLMATHOLD = function(options){

        ta.execute({
            name: "CDLMATHOLD",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInPenetration: ((options != undefined && options.optInPenetration !== undefined) ? options.optInPenetration: 0.5),
        }, function (err, result){

            talib.populateSignals("cdlmathold", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLMORNINGDOJISTAR = function(options){

        ta.execute({
            name: "CDLMORNINGDOJISTAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInPenetration: ((options != undefined && options.optInPenetration !== undefined) ? options.optInPenetration: 0.3),
        }, function (err, result){

            talib.populateSignals("cdlmorningdojistar", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLMORNINGSTAR = function(options){

        ta.execute({
            name: "CDLMORNINGSTAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
            optInPenetration: ((options != undefined && options.optInPenetration !== undefined) ? options.optInPenetration: 0.3),
        }, function (err, result){

            talib.populateSignals("cdlmorningstar", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLONNECK = function(options){

        ta.execute({
            name: "CDLONNECK",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlonneck", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLPIERCING = function(options){

        ta.execute({
            name: "CDLPIERCING",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlpiercing", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLRICKSHAWMAN = function(options){

        ta.execute({
            name: "CDLRICKSHAWMAN",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlrickshawman", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLRISEFALL3METHODS = function(options){

        ta.execute({
            name: "CDLRISEFALL3METHODS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlrisefall3methods", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLSEPARATINGLINES = function(options){

        ta.execute({
            name: "CDLSEPARATINGLINES",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlseperatinglines", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLSHOOTINGSTAR = function(options){

        ta.execute({
            name: "CDLSHOOTINGSTAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlshootingstar", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLSHORTLINE = function(options){

        ta.execute({
            name: "CDLSHORTLINE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlshortline", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLSPINNINGTOP = function(options){

        ta.execute({
            name: "CDLSPINNINGTOP",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlspinningtop", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLSTALLEDPATTERN = function(options){

        ta.execute({
            name: "CDLSTALLEDPATTERN",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlstalledpattern", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLSTICKSANDWICH = function(options){

        ta.execute({
            name: "CDLSTICKSANDWICH",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlsticksandwich", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLTAKURI = function(options){

        ta.execute({
            name: "CDLTAKURI",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdltakuri", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLTASUKIGAP = function(options){

        ta.execute({
            name: "CDLTASUKIGAP",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdltasukigap", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLTHRUSTING = function(options){

        ta.execute({
            name: "CDLTHRUSTING",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlthrusting", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLTRISTAR = function(options){

        ta.execute({
            name: "CDLTRISTAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdltristar", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLUNIQUE3RIVER = function(options){

        ta.execute({
            name: "CDLUNIQUE3RIVER",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlunique3river", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLUPSIDEGAP2CROWS = function(options){

        ta.execute({
            name: "CDLUPSIDEGAP2CROWS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlupsidegap2crows", result.result.outInteger);

        });

        return talib;
    }

    talib.CDLXSIDEGAP3METHODS = function(options){

        ta.execute({
            name: "CDLXSIDEGAP3METHODS",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("cdlxsidegap3methods", result.result.outInteger);

        });

        return talib;
    }

    talib.BETA = function(options){

        ta.execute({
            name: "BETA",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal0: talib.marketdata.high,
            inReal1: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 5),
        }, function (err, result){

            talib.populateSignals("beta", result.result.outReal);

        });

        return talib;
    }

    talib.CORREL = function(options){

        ta.execute({
            name: "CORREL",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal0: talib.marketdata.high,
            inReal1: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 30),
        }, function (err, result){

            talib.populateSignals("correl", result.result.outReal);

        });

        return talib;
    }

    talib.LINEARREG = function(options){

        ta.execute({
            name: "LINEARREG",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("linearreg", result.result.outReal);

        });

        return talib;
    }

    talib.LINEARREG_ANGLE = function(options){

        ta.execute({
            name: "LINEARREG_ANGLE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("linearreg_angle", result.result.outReal);

        });

        return talib;
    }

    talib.LINEARREG_INTERCEPT = function(options){

        ta.execute({
            name: "LINEARREG_INTERCEPT",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("linearreg_intercept", result.result.outReal);

        });

        return talib;
    }

    talib.LINEARREG_SLOPE = function(options){

        ta.execute({
            name: "LINEARREG_SLOPE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("linearreg_slope", result.result.outReal);

        });

        return talib;
    }

    talib.STDDEV = function(options){

        ta.execute({
            name: "STDDEV",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 5),
            optInNbDev: ((options != undefined && options.optInNbDev !== undefined) ? options.optInNbDev: 1),
        }, function (err, result){

            talib.populateSignals("stddev", result.result.outReal);

        });

        return talib;
    }

    talib.TSF = function(options){

        ta.execute({
            name: "TSF",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("tsf", result.result.outReal);

        });

        return talib;
    }

    talib.VAR = function(options){

        ta.execute({
            name: "VAR",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 5),
            optInNbDev: ((options != undefined && options.optInNbDev !== undefined) ? options.optInNbDev: 1),
        }, function (err, result){

            talib.populateSignals("var", result.result.outReal);

        });

        return talib;
    }

    talib.AVGPRICE = function(options){

        ta.execute({
            name: "AVGPRICE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            open: talib.marketdata.open,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("avgprice", result.result.outReal);

        });

        return talib;
    }

    talib.AVGDEV = function(options){

        ta.execute({
            name: "AVGDEV",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            inReal: talib.marketdata.close,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("avgdev", result.result.outReal);

        });

        return talib;
    }

    talib.MEDPRICE = function(options){

        ta.execute({
            name: "MEDPRICE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            optInTimePeriod: ((options != undefined && options.optInTimePeriod !== undefined) ? options.optInTimePeriod: 14),
        }, function (err, result){

            talib.populateSignals("medprice", result.result.outReal);

        });

        return talib;
    }

    talib.TYPPRICE = function(options){

        ta.execute({
            name: "TYPPRICE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("typprice", result.result.outReal);

        });

        return talib;
    }

    talib.WCLPRICE = function(options){

        ta.execute({
            name: "WCLPRICE",
            startIdx: 0,
            endIdx: talib.marketdata.close.length - 1,
            high: talib.marketdata.high,
            low: talib.marketdata.low,
            close: talib.marketdata.close,
        }, function (err, result){

            talib.populateSignals("wclprice", result.result.outReal);

        });

        return talib;
    }

    talib.explain = function(symbol){

        return ta.explain(symbol);
    }

    talib.populateSignals = function(signal,data){

        if(talib.signals[talib.marketdata.market] == undefined){

            talib.signals[talib.marketdata.market] = {};
        }

        if(talib.signals[talib.marketdata.market][signal] == undefined){

            talib.signals[talib.marketdata.market][signal] = [];
        }

        talib.signals[talib.marketdata.market][signal] = {data: data};

        if(talib.signals[talib.marketdata.market][signal].market == undefined){

            talib.signals[talib.marketdata.market][signal]['market'] = '';
        }

        talib.signals[talib.marketdata.market][signal]['market'] = talib.marketdata.market;

        if(talib.signals[talib.marketdata.market][signal].data.length === 0){

            if(talib.signals[talib.marketdata.market][signal].message == undefined){

                talib.signals[talib.marketdata.market][signal]['message'] = '';
            }

            talib.signals[talib.marketdata.market][signal].message = "Not enough data. Wait a bit.";

        }else{

            if(talib.signals[talib.marketdata.market][signal].message != undefined){

                delete talib.signals[talib.marketdata.market][signal].message;
            }
        }
    }

    talib.done = function(callback){

        return callback(talib.marketdata,talib.signals);
    }
}

module.exports = {

    talib: talibInterface
}
