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

app.controller('mainController', function($scope,$http) {
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
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 2428
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 481
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 417
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 366
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 356
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 343
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 315
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 267
        },
        {
            "FirstCandleType": "short line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 222
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 218
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 216
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line red with long body",
            "PatternCount": 197
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 193
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 191
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 182
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 169
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line green with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 165
        },
        {
            "FirstCandleType": "short line green with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 163
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 151
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 147
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with short body",
            "PatternCount": 140
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line green with long body",
            "PatternCount": 135
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 134
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 129
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 123
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 114
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 113
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 105
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 103
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 103
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 101
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 100
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 100
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 98
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 97
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 94
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 91
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 91
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 91
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 84
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 82
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 81
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 75
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with short body",
            "PatternCount": 75
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 74
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 73
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 73
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 71
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 70
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line green with short body",
            "PatternCount": 70
        }
    ];     
    var candlePatternsFall = [
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 830
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 537
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 537
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 365
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 312
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 303
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 251
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 243
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 242
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 227
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 197
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 175
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 166
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 166
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 143
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 141
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 133
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 126
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line green with long body",
            "PatternCount": 125
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 120
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 101
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 101
        },
        {
            "FirstCandleType": "short line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 95
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 94
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 91
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 89
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with short body",
            "PatternCount": 85
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "short line green with long body",
            "PatternCount": 81
        },
        {
            "FirstCandleType": "short line green with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 77
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "short line green with long body",
            "PatternCount": 75
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with short body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 68
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 64
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 64
        },
        {
            "FirstCandleType": "long line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line red with long body",
            "PatternCount": 61
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "short line green with long body",
            "PatternCount": 61
        },
        {
            "FirstCandleType": "long line red with short body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 60
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with short body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 57
        },
        {
            "FirstCandleType": "long line green with long body",
            "SecondCandleType": "short line red with long body",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 57
        },
        {
            "FirstCandleType": "short line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 57
        },
        {
            "FirstCandleType": "short line red with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 55
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 55
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with short body",
            "PatternCount": 54
        },
        {
            "FirstCandleType": "short line green with long body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 53
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line green with short body",
            "PatternCount": 52
        },
        {
            "FirstCandleType": "long line green with short body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "short line neutral",
            "PatternCount": 52
        },
        {
            "FirstCandleType": "long line green with short body",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with long body",
            "PatternCount": 51
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line red with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 50
        },
        {
            "FirstCandleType": "short line neutral",
            "SecondCandleType": "long line green with long body",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 49
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "short line neutral",
            "ThirdCandleType": "long line green with short body",
            "PatternCount": 48
        },
        {
            "FirstCandleType": "long line neutral",
            "SecondCandleType": "long line neutral",
            "ThirdCandleType": "long line neutral",
            "PatternCount": 47
        }
    ];
    var url = "", today = Math.floor(Date.now() / 1000);
    $scope.forecastObj = [
        {
            "pair":"USDT_BAT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_BNT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_BTC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_DASH",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_DOGE",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_EOS",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_ETC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_ETH",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_GNT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_KNC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_LOOM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_LSK",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_LTC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_MANA",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_NXT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_QTUM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_REP",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_SC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_SNT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_STR",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_XMR",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_XRP",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_ZEC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"USDT_ZRX",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_ARDR",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_ATOM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_BAT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_BCHABC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_BCHSV",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_BCN",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_BTS",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_BURST",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_CLAM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_CVC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_DASH",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_DCR",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_DGB",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_DOGE",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_EOS",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_ETC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_ETH",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_FCT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_FOAM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_GAME",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_GAS",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_GNT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_GRIN",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_HUC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_KNC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_LBC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_LOOM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_LPT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_LSK",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_LTC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_MAID",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_MANA",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_NAV",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_NMC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_NMR",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_NXT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_OMG",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_OMNI",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_PASC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_POLY",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_PPC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_QTUM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_REP",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_SBD",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_SC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_SNT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_STEEM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_STORJ",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_STR",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_STRAT",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_SYS",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_VIA",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_VTC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_XCP",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_XEM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_XMR",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_XPM",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_XRP",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_ZEC",
            "forecast": "?",
            "strength": "-"
        },
        {
            "pair":"BTC_ZRX",
            "forecast": "?",
            "strength": "-"
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
            firstCandle = findCandleType(response.data.slice(response.data.length-23,response.data.length-4),response.data[response.data.length-3]);
            secondCandle = findCandleType(response.data.slice(response.data.length-22,response.data.length-3),response.data[response.data.length-2]);
            thirdCandle = findCandleType(response.data.slice(response.data.length-21,response.data.length-2),response.data[response.data.length-1]);
            
            var fallPattern = null;

            // check if candles are known pattern in fall patterns
            angular.forEach(candlePatternsFall, function(pattern) {
                if(pattern.FirstCandleType == firstCandle && pattern.FirstCandleType == secondCandle && pattern.FirstCandleType == thirdCandle) {
                    var index = $scope.forecastObj.findIndex(function(p) {
                        return p.pair == cryptoPair;
                    });
                    $scope.forecastObj[index].forecast = "fall";
                    $scope.forecastObj[index].strength = "100%";
                    fallPattern = pattern;
                }
            });
            
            // check if candles are known pattern in rise patterns
            angular.forEach(candlePatternsRise, function(pattern) {
                if(pattern.FirstCandleType == firstCandle && pattern.FirstCandleType == secondCandle && pattern.FirstCandleType == thirdCandle) {
                    var index = $scope.forecastObj.findIndex(function(p) {
                        return p.pair == cryptoPair;
                    });
                    
                    // if the rise pattern is not a fall pattern the strength is 100%
                    if($scope.forecastObj[index].forecast == "?") {
                        $scope.forecastObj[index].forecast = "rise";
                        $scope.forecastObj[index].strength = "100%";
                    // if there this is same pattern for rise and fall hypes, calculate strentgh from PatternCounts ratio
                    } else {
                        if(pattern.PatternCount > fallPattern.PatternCount) {
                            $scope.forecastObj[index].forecast = "rise";
                            $scope.forecastObj[index].strength = Math.round((pattern.PatternCount/(pattern.PatternCount+fallPattern.PatternCount))*100)+"%";
                        } else {
                            $scope.forecastObj[index].forecast = "fall";
                            $scope.forecastObj[index].strength = Math.round((fallPattern.PatternCount/(pattern.PatternCount+fallPattern.PatternCount))*100)+"%";
                        }
                    }  
                }
            });
        });
    });  
       
    //  add candle type to candle based on the period high, low, open, close information
    function findCandleType(helperCandle,candle) {
        var line = "", candleType = "";

        var averageLineHeight = 0;
        angular.forEach(helperCandle, function(item) {
            averageLineHeight += (item.high - item.low);
        });
        averageLineHeight = averageLineHeight/helperCandle.length;

        // decide if the candle is long or short candle
        if(averageLineHeight < (candle.high-candle.low)) {
          line = "long"
        } else {
          line = "short"
        }
        
        // find candle type
        
        // neutral candle body is less that 2% of price
          if(Math.abs(candle.close-candle.open) < (0.02*candle.close)) {
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