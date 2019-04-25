var app = angular.module('cryptoDashboard', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "tpl/header.tpl.html"
    })
    .when("/forecast", {
        templateUrl : "tpl/forecast.tpl.html"
    });
});

app.controller('mainController', function($scope,$location,$http) {
    var cryptocurrencyPairs = ["USDT_BAT", "USDT_BNT", "USDT_BTC", "USDT_DASH", "USDT_DOGE",
                        "USDT_EOS", "USDT_ETC", "USDT_ETH", "USDT_GNT","USDT_KNC",
                        "USDT_LOOM","USDT_LSK","USDT_LTC","USDT_MANA","USDT_NXT",
                        "USDT_QTUM","USDT_REP","USDT_SC","USDT_SNT","USDT_STR",
                        "USDT_XMR","USDT_XRP","USDT_ZEC","USDT_ZRX",
                        "BTC_ARDR", "BTC_ATOM", "BTC_BAT", "BTC_BCHABC", "BTC_BCHSV", 
                        "BTC_BCN", "BTC_BTS", "BTC_BURST","BTC_CLAM",
                        "BTC_CVC","BTC_DASH","BTC_DCR","BTC_DGB","BTC_DOGE",
                        "BTC_EOS","BTC_ETC","BTC_ETH","BTC_FCT","BTC_FOAM",
                        "BTC_GAME","BTC_GAS","BTC_GNT","BTC_GRIN","BTC_HUC",
                        "BTC_KNC","BTC_LBC","BTC_LOOM","BTC_LPT","BTC_LSK",
                        "BTC_LTC","BTC_MAID","BTC_MANA","BTC_NAV","BTC_NMC",
                        "BTC_NMR","BTC_NXT","BTC_OMG","BTC_OMNI","BTC_PASC",
                        "BTC_POLY","BTC_PPC","BTC_QTUM","BTC_REP","BTC_SBD",
                        "BTC_SC","BTC_SNT","BTC_STEEM","BTC_STORJ","BTC_STR",
                        "BTC_STRAT","BTC_SYS","BTC_VIA","BTC_VTC","BTC_XCP",
                        "BTC_XEM","BTC_XMR","BTC_XPM","BTC_XRP","BTC_ZEC",
                        "BTC_ZRX"
    ];
    var candlePatternsRise = [
        {
            "firstCandle": "short line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line neutral",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "long line neutral"
        },
        {
            "firstCandle": "long line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "long line neutral"
        },
        {
            "firstCandle": "long line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line neutral",
            "thirdCandle": "long line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "long line red with long body"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line red with long body",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line red with long body",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "long line green with long body"
        },
    ];
    var candlePatternsFall = [
        {
            "firstCandle": "short line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "long line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line neutral",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "long line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "long line green with long body"
        },
        {
            "firstCandle": "long line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "long line neutral",
            "secondCandle": "short line neutral",
            "thirdCandle": "long line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line green with long body",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line neutral",
            "thirdCandle": "long line green with long body"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line red with long body",
            "thirdCandle": "short line neutral"
        },
        {
            "firstCandle": "short line neutral",
            "secondCandle": "long line neutral",
            "thirdCandle": "long line neutral"
        },
    ];                                      
    var url = "", today = Math.floor(Date.now() / 1000);
    $scope.forecastObj = [
        {
            "pair":"USDT_BAT",
            "forecast": "?"
        },
        {
            "pair":"USDT_BNT",
            "forecast": "?"
        },
        {
            "pair":"USDT_BTC",
            "forecast": "?"
        },
        {
            "pair":"USDT_DASH",
            "forecast": "?"
        },
        {
            "pair":"USDT_DOGE",
            "forecast": "?"
        },
        {
            "pair":"USDT_EOS",
            "forecast": "?"
        },
        {
            "pair":"USDT_ETC",
            "forecast": "?"
        },
        {
            "pair":"USDT_ETH",
            "forecast": "?"
        },
        {
            "pair":"USDT_GNT",
            "forecast": "?"
        },
        {
            "pair":"USDT_KNC",
            "forecast": "?"
        },
        {
            "pair":"USDT_LOOM",
            "forecast": "?"
        },
        {
            "pair":"USDT_LSK",
            "forecast": "?"
        },
        {
            "pair":"USDT_LTC",
            "forecast": "?"
        },
        {
            "pair":"USDT_MANA",
            "forecast": "?"
        },
        {
            "pair":"USDT_NXT",
            "forecast": "?"
        },
        {
            "pair":"USDT_QTUM",
            "forecast": "?"
        },
        {
            "pair":"USDT_REP",
            "forecast": "?"
        },
        {
            "pair":"USDT_SC",
            "forecast": "?"
        },
        {
            "pair":"USDT_SNT",
            "forecast": "?"
        },
        {
            "pair":"USDT_STR",
            "forecast": "?"
        },
        {
            "pair":"USDT_XMR",
            "forecast": "?"
        },
        {
            "pair":"USDT_XRP",
            "forecast": "?"
        },
        {
            "pair":"USDT_ZEC",
            "forecast": "?"
        },
        {
            "pair":"USDT_ZRX",
            "forecast": "?"
        },
        {
            "pair":"BTC_ARDR",
            "forecast": "?"
        },
        {
            "pair":"BTC_ATOM",
            "forecast": "?"
        },
        {
            "pair":"BTC_BAT",
            "forecast": "?"
        },
        {
            "pair":"BTC_BCHABC",
            "forecast": "?"
        },
        {
            "pair":"BTC_BCHSV",
            "forecast": "?"
        },
        {
            "pair":"BTC_BCN",
            "forecast": "?"
        },
        {
            "pair":"BTC_BTS",
            "forecast": "?"
        },
        {
            "pair":"BTC_BURST",
            "forecast": "?"
        },
        {
            "pair":"BTC_CLAM",
            "forecast": "?"
        },
        {
            "pair":"BTC_CVC",
            "forecast": "?"
        },
        {
            "pair":"BTC_DASH",
            "forecast": "?"
        },
        {
            "pair":"BTC_DCR",
            "forecast": "?"
        },
        {
            "pair":"BTC_DGB",
            "forecast": "?"
        },
        {
            "pair":"BTC_DOGE",
            "forecast": "?"
        },
        {
            "pair":"BTC_EOS",
            "forecast": "?"
        },
        {
            "pair":"BTC_ETC",
            "forecast": "?"
        },
        {
            "pair":"BTC_ETH",
            "forecast": "?"
        },
        {
            "pair":"BTC_FCT",
            "forecast": "?"
        },
        {
            "pair":"BTC_FOAM",
            "forecast": "?"
        },
        {
            "pair":"BTC_GAME",
            "forecast": "?"
        },
        {
            "pair":"BTC_GAS",
            "forecast": "?"
        },
        {
            "pair":"BTC_GNT",
            "forecast": "?"
        },
        {
            "pair":"BTC_GRIN",
            "forecast": "?"
        },
        {
            "pair":"BTC_HUC",
            "forecast": "?"
        },
        {
            "pair":"BTC_KNC",
            "forecast": "?"
        },
        {
            "pair":"BTC_LBC",
            "forecast": "?"
        },
        {
            "pair":"BTC_LOOM",
            "forecast": "?"
        },
        {
            "pair":"BTC_LPT",
            "forecast": "?"
        },
        {
            "pair":"BTC_LSK",
            "forecast": "?"
        },
        {
            "pair":"BTC_LTC",
            "forecast": "?"
        },
        {
            "pair":"BTC_MAID",
            "forecast": "?"
        },
        {
            "pair":"BTC_MANA",
            "forecast": "?"
        },
        {
            "pair":"BTC_NAV",
            "forecast": "?"
        },
        {
            "pair":"BTC_NMC",
            "forecast": "?"
        },
        {
            "pair":"BTC_NMR",
            "forecast": "?"
        },
        {
            "pair":"BTC_NXT",
            "forecast": "?"
        },
        {
            "pair":"BTC_OMG",
            "forecast": "?"
        },
        {
            "pair":"BTC_OMNI",
            "forecast": "?"
        },
        {
            "pair":"BTC_PASC",
            "forecast": "?"
        },
        {
            "pair":"BTC_POLY",
            "forecast": "?"
        },
        {
            "pair":"BTC_PPC",
            "forecast": "?"
        },
        {
            "pair":"BTC_QTUM",
            "forecast": "?"
        },
        {
            "pair":"BTC_REP",
            "forecast": "?"
        },
        {
            "pair":"BTC_SBD",
            "forecast": "?"
        },
        {
            "pair":"BTC_SC",
            "forecast": "?"
        },
        {
            "pair":"BTC_SNT",
            "forecast": "?"
        },
        {
            "pair":"BTC_STEEM",
            "forecast": "?"
        },
        {
            "pair":"BTC_STORJ",
            "forecast": "?"
        },
        {
            "pair":"BTC_STR",
            "forecast": "?"
        },
        {
            "pair":"BTC_STRAT",
            "forecast": "?"
        },
        {
            "pair":"BTC_SYS",
            "forecast": "?"
        },
        {
            "pair":"BTC_VIA",
            "forecast": "?"
        },
        {
            "pair":"BTC_VTC",
            "forecast": "?"
        },
        {
            "pair":"BTC_XCP",
            "forecast": "?"
        },
        {
            "pair":"BTC_XEM",
            "forecast": "?"
        },
        {
            "pair":"BTC_XMR",
            "forecast": "?"
        },
        {
            "pair":"BTC_XPM",
            "forecast": "?"
        },
        {
            "pair":"BTC_XRP",
            "forecast": "?"
        },
        {
            "pair":"BTC_ZEC",
            "forecast": "?"
        },
        {
            "pair":"BTC_ZRX",
            "forecast": "?"
        }
];

    // for each cryptocurrency pair
    angular.forEach(cryptocurrencyPairs, function(cryptoPair) {
        // create url for current cryptoPair
        url = "https://poloniex.com/public?command=returnChartData&currencyPair="+cryptoPair+"&start="+(today-86400)+"&end="+today+"&period="+14400;         
        
        var firstCandle = "", secondCandle = "", thirdCandle = "";
        // download recent data from Poloniex API
        $http.get(url).then(function(response){
            // find candle type for current cryptocurrency pair
            firstCandle = findCandleType(response.data[response.data.length-4],response.data[response.data.length-3]);
            secondCandle = findCandleType(response.data[response.data.length-3],response.data[response.data.length-2]);
            thirdCandle = findCandleType(response.data[response.data.length-2],response.data[response.data.length-1]);
            
            // check if candles are known pattern in fall patterns
            angular.forEach(candlePatternsFall, function(pattern) {
                if(pattern.firstCandle == firstCandle && pattern.secondCandle == secondCandle && pattern.thirdCandle == thirdCandle) {
                    var index = $scope.forecastObj.findIndex(function(p) {
                        return p.pair == cryptoPair;
                    });
                    $scope.forecastObj[index].forecast = "fall";
                }
            });
            
            // check if candles are known pattern in rise patterns
            angular.forEach(candlePatternsRise, function(pattern) {
                if(pattern.firstCandle == firstCandle && pattern.secondCandle == secondCandle && pattern.thirdCandle == thirdCandle) {
                    var index = $scope.forecastObj.findIndex(function(p) {
                        return p.pair == cryptoPair;
                    });
                    $scope.forecastObj[index].forecast = "rise";
                }
            });
        });
    });  
       
    //  add candle type to candle based on the period high, low, open, close information
    function findCandleType(helperCandle,candle) {
        var line = "", candleType = "";

        // decide if the candle is long or short candle
        if((helperCandle.high-helperCandle.low) < (candle.high-candle.low)) {
          line = "long"
        } else {
          line = "short"
        }
        
        // find candle type
        
        // neutral candle body is less that 3% of price
          if(Math.abs(candle.close-candle.open) < (0.03*candle.close)) {
            // testing if line is long or short
            if(line == "long") {
              candleType = "long line neutral"
            } else {
              candleType = "short line neutral"
            }
          }  // testing if candle is green
          else if(candle.close > candle.open) {
            // tesing if candle body is greater than 50% of its size
            if((candle.close-candle.open) > 0.5*(candle.high-candle.low)) {
              // testing if line is long or short
              if(line == "long") {
                candleType = "long line green with long body"
              } else {
                candleType = "short line green with long body"
              }
            } else {
            // testing if line is long or short
              if(line == "long") {
                candleType = "long line green with short body"
              } else {
                candleType = "short line green with short body"
              }
            }
          } // testing if candle is red
          else {
            // tesing if candle body is greater than 50% of its size
            if((candle.open-candle.close) > 0.5*(candle.high-candle.low)) {
              // testing if line is long or short
              if(line == "long") {
                candleType = "long line red with long body"
              } else {
                candleType = "short line red with long body"
              }
            } else {
              // testing if line is long or short
              if(line == "long") {
                candleType = "long line red with short body"
              } else {
                candleType = "short line red with short body"
              }
            }
          } 
        
        return(candleType)
    };

                        
    

});