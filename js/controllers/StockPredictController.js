app.controller('StockPredictController', ['$scope','$http','$location','$timeout','$window',
 function($scope,$http,$location,$timeout,$window) {
    $scope.selectedBestTimePeriod = 'Apple';
    $scope.selectBestAlgorithmsAndTendencies = 'Apple',
    $scope.selectedPrediction = 'Apple';
    // Read silentRows data
    // $http.get("data/silentRows.json").then(function(response) {
    //     // First function handles success
    //     var silentRows = response.data;

    //     // Prepare data for plot
    //     var tendencyIndex = -1;
    //     var index = 0;
    //     silentRows.forEach(function(group) {
    //         if(index % 5 == 0) {
    //             tendencyIndex++;

    //             // Initialize arrays
    //             $scope.data[tendencyIndex] = [];
    //             $scope.data[tendencyIndex].x = [];
    //             $scope.data[tendencyIndex].y = [];

    //             $scope.data[tendencyIndex].name = group.numberOfSilentIndicators;
    //             $scope.data[tendencyIndex].type = 'bar';
    //         }
    //         $scope.data[tendencyIndex].x.push(group.columnIndex.parseInt());
    //         $scope.data[tendencyIndex].y.push(group.silentRows);
    //         index++;
    //     });
    // }).catch(function(error) {
    //     // Second function handles error            
    //     console.log("Error reading data...")
    //     $scope.error = "Error reading data...";
    // });

    // Definiton of D3
    var d3 = Plotly.d3;

    // Silent rows plot
    var trace1 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [671,481,624,523,439], 
        name: '5 silent indicators', 
        type: 'bar'
    };
      
    var trace2 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [462,220,377,245,194], 
        name: '6 silent indicators', 
        type: 'bar'
    };

    var trace3 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [195,60,137,37,23], 
        name: '7 silent indicators', 
        type: 'bar'
    };

    var trace4 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [26,0,4,0,0], 
        name: '8 silent indicators', 
        type: 'bar'
    };

    var trace5 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0,0,0,0,0], 
        name: '9 silent indicators', 
        type: 'bar'
    };

    var data = [trace1, trace2,trace3, trace4, trace5];
    var layout = {
        title: 'Number of silent rows by number of silent indicators, grouped by tendency',
        xaxis: {
          title: 'Tendency'
        },
        yaxis: {
          title: 'silent rows'
        }
      };

    Plotly.newPlot('silentRowsPlot', data, layout);
    
    // Selectors for resizing function - this is nto working, plot are no centered and are larger then should be, also they are not responsive
    // try responsivnes or let there only tabs
    // var silentRowsPlot = d3.select('#silentRowsPlot')
    //     .style({
    //         width: '94%',
    //         margin: '3%'
    //     });
    // var silentRowsPlotNode = silentRowsPlot.node();


    // Best time period Apple
    var trace1 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.8333333,0.6875000,0.7500000,0.6098901,0.8333333], 
        name: '1 year data', 
        type: 'bar'
    };
      
    var trace2 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5725806, 0.5564516, 0.6048387, 0.5645161, 0.7338710], 
        name: '2 year data', 
        type: 'bar'
    };

    var trace3 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.590, 0.560, 0.600, 0.605, 0.720], 
        name: '3 year data', 
        type: 'bar'
    };

    var trace4 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5454545, 0.5745455, 0.5781818, 0.5927273, 0.7090909], 
        name: '4 year data', 
        type: 'bar'
    };

    var trace5 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5600000, 0.5657143, 0.6085714, 0.5714286, 0.6771429], 
        name: '5 year data', 
        type: 'bar'
    };

    var trace6 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5288462, 0.5453297, 0.6112637, 0.6098901, 0.6208791], 
        name: '10 year data', 
        type: 'bar'
    };

    var data = [trace1, trace2,trace3, trace4, trace5, trace6];
    var layout = {
        title: 'Best time period for classification Apple',
        xaxis: {
          title: 'Tendency'
        },
        yaxis: {
          title: 'Best accuracy'
        }
      };

    Plotly.newPlot('bestTimePeriodAAPL', data, layout);
 
    // Selectors for resizing function
    var bestTimePeriodAAPL = d3.select('#bestTimePeriodAAPL')
        // .style({
        //     width: '94%',
        //     margin: '3%'
        // });
    var bestTimePeriodAAPLNode = bestTimePeriodAAPL.node();

    // Best time period Bank of America
    var trace1 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5625000, 0.6041667, 0.7083333, 0.8750000, 0.8125000], 
        name: '1 year data', 
        type: 'bar'
    };
      
    var trace2 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5483871, 0.6129032, 0.6209677, 0.7096774, 0.7177419], 
        name: '2 year data', 
        type: 'bar'
    };

    var trace3 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.545, 0.585, 0.575, 0.620, 0.665], 
        name: '3 year data', 
        type: 'bar'
    };

    var trace4 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5854545, 0.5963636, 0.5927273, 0.5854545, 0.6545455], 
        name: '4 year data', 
        type: 'bar'
    };

    var trace5 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5628571, 0.5742857, 0.5657143, 0.6057143, 0.6600000], 
        name: '5 year data', 
        type: 'bar'
    };

    var trace6 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5398352, 0.5274725, 0.5508242, 0.5549451, 0.5700549], 
        name: '10 year data', 
        type: 'bar'
    };

    var data = [trace1, trace2,trace3, trace4, trace5, trace6];
    var layout = {
        title: 'Best time period for classification Bank of America',
        xaxis: {
          title: 'Tendency'
        },
        yaxis: {
          title: 'Best accuracy'
        }
      };

    Plotly.newPlot('bestTimePeriodBAC', data, layout);
 
    // Selectors for resizing function
    var bestTimePeriodBAC = d3.select('#bestTimePeriodBAC')
        // .style({
        //     width: '94%',
        //     margin: '3%'
        // });
    var bestTimePeriodBACNode = bestTimePeriodBAC.node();

    // Best time period Intel
     var trace1 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5208333, 0.6875000, 0.5625000, 0.6250000, 0.8125000], 
        name: '1 year data', 
        type: 'bar'
    };
      
    var trace2 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5080645, 0.6129032, 0.6290323, 0.6532258, 0.7500000], 
        name: '2 year data', 
        type: 'bar'
    };

    var trace3 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.535, 0.555, 0.605, 0.640, 0.740], 
        name: '3 year data', 
        type: 'bar'
    };

    var trace4 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5709091, 0.5490909, 0.5781818, 0.6109091, 0.6763636], 
        name: '4 year data', 
        type: 'bar'
    };

    var trace5 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5828571, 0.5685714, 0.5685714, 0.6257143, 0.6542857], 
        name: '5 year data', 
        type: 'bar'
    };

    var trace6 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5192308, 0.5302198, 0.5975275, 0.5947802, 0.6181319], 
        name: '10 year data', 
        type: 'bar'
    };

    var data = [trace1, trace2,trace3, trace4, trace5, trace6];
    var layout = {
        title: 'Best time period for classification Intel',
        xaxis: {
          title: 'Tendency'
        },
        yaxis: {
          title: 'Best accuracy'
        }
      };

    Plotly.newPlot('bestTimePeriodINTC', data, layout);
 
    // Selectors for resizing function
    var bestTimePeriodINTC = d3.select('#bestTimePeriodINTC')
        // .style({
        //     width: '94%',
        //     margin: '3%'
        // });
    var bestTimePeriodINTCNode = bestTimePeriodINTC.node();

    // Best algorithms and tendencies Apple
    var trace1 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.8125000, 0.6666667, 0.7395833, 0.6078297, 0.8125000], 
        name: 'Mean of two best algotithms', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };
      
    var trace2 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.7500000, 0.6458333, 0.6875000, 0.6057692, 0.7500000], 
        name: 'Two-Class Averaged Perceptron', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace3 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.7916667, 0.5833333, 0.7291667, 0.5590659, 0.7916667], 
        name: 'Two-Class Boosted Decision Tree', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace4 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.8333333, 0.6458333, 0.7083333, 0.5810440, 0.8333333], 
        name: 'Two-Class Decision Forest', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace5 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.7083333, 0.6250000, 0.6041667, 0.5741758, 0.7291667], 
        name: 'Two-Class Locally-Deep Support Vector Machine', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace6 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.7916667, 0.6250000, 0.6875000, 0.5961538, 0.7916667], 
        name: 'Two-Class Neural Network', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace7 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.7500000, 0.6875000, 0.7500000, 0.6098901, 0.7500000], 
        name: 'Two-Class Support Vector Machine', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var data = [trace1, trace2,trace3, trace4, trace5, trace6, trace7];
    var layout = {
        title: 'Best tendencies by algorithms for classification Apple',
        xaxis: {
          title: 'Tendency'
        },
        yaxis: {
          title: 'Accuracy'
        }
      };

    Plotly.newPlot('bestAlgorithmsAndTendenciesAAPL', data, layout);
 
    // Selectors for resizing function
    var bestAlgorithmsAndTendenciesAAPL = d3.select('#bestAlgorithmsAndTendenciesAAPL')
        // .style({
        //     width: '94%',
        //     margin: '3%'
        // });
    var bestAlgorithmsAndTendenciesAAPLNode = bestAlgorithmsAndTendenciesAAPL.node();

    // Best algorithms and tendencies Bank of America
    var trace1 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5416667, 0.5937500, 0.6979167, 0.8541667, 0.8020833], 
        name: 'Mean of two best algotithms', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };
      
    var trace2 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.4375000, 0.5208333, 0.7083333, 0.8333333, 0.1458333], 
        name: 'Two-Class Averaged Perceptron', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace3 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5625000, 0.6041667, 0.6250000, 0.7708333, 0.8125000], 
        name: 'Two-Class Boosted Decision Tree', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace4 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.4166667, 0.5833333, 0.6666667, 0.7500000, 0.7708333], 
        name: 'Two-Class Decision Forest', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace5 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5208333, 0.5000000, 0.6458333, 0.7708333, 0.7916667], 
        name: 'Two-Class Locally-Deep Support Vector Machine', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace6 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5000000, 0.5208333, 0.6875000, 0.7916667, 0.1458333], 
        name: 'Two-Class Neural Network', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace7 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.4166667, 0.5833333, 0.6041667, 0.8750000, 0.7291667], 
        name: 'Two-Class Support Vector Machine', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var data = [trace1, trace2,trace3, trace4, trace5, trace6, trace7];
    var layout = {
        title: 'Best tendencies by algorithms for classification Bank of America',
        xaxis: {
          title: 'Tendency'
        },
        yaxis: {
          title: 'Accuracy'
        }
      };

    Plotly.newPlot('bestAlgorithmsAndTendenciesBAC', data, layout);
 
    // Selectors for resizing function
    var bestAlgorithmsAndTendenciesBAC = d3.select('#bestAlgorithmsAndTendenciesBAC')
        // .style({
        //     width: '94%',
        //     margin: '3%'
        // });
    var bestAlgorithmsAndTendenciesBACLNode = bestAlgorithmsAndTendenciesBAC.node();

    // Best algorithms and tendencies Intel
    var trace1 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5208333, 0.6875000, 0.5520833, 0.6250000, 0.7708333], 
        name: 'Mean of two best algotithms', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };
      
    var trace2 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [ 0.3541667, 0.4375000, 0.5416667, 0.6041667, 0.7291667], 
        name: 'Two-Class Averaged Perceptron', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace3 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5208333, 0.6875000, 0.5416667, 0.4166667, 0.7291667], 
        name: 'Two-Class Boosted Decision Tree', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace4 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.4375000, 0.5625000, 0.5416667, 0.5416667, 0.6875000], 
        name: 'Two-Class Decision Forest', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace5 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.5208333, 0.6875000, 0.5625000, 0.5625000, 0.8125000], 
        name: 'Two-Class Locally-Deep Support Vector Machine', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace6 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.3958333, 0.5208333, 0.5208333, 0.6250000, 0.6666667], 
        name: 'Two-Class Neural Network', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var trace7 = {
        x: ['1 day','3 days','7 days','14 days','30 days'], 
        y: [0.3750000, 0.4583333, 0.5000000, 0.6250000, 0.6250000], 
        name: 'Two-Class Support Vector Machine', 
        mode: 'markers',
        type: 'scatter',
        marker: { size: 12 }
    };

    var data = [trace1, trace2,trace3, trace4, trace5, trace6, trace7];
    var layout = {
        title: 'Best tendencies by algorithms for classification Intel',
        xaxis: {
          title: 'Tendency'
        },
        yaxis: {
          title: 'Accuracy'
        }
      };

    Plotly.newPlot('bestAlgorithmsAndTendenciesINTC', data, layout);
 
    // Selectors for resizing function
    var bestAlgorithmsAndTendenciesINTC = d3.select('#bestAlgorithmsAndTendenciesINTC')
        // .style({
        //     width: '94%',
        //     margin: '3%'
        // });
    var bestAlgorithmsAndTendenciesINTCNode = bestAlgorithmsAndTendenciesINTC.node();
      
    // // Resizing function
    // $window.onresize = function() {
    //     Plotly.Plots.resize(silentRowsPlotNode);

    //     Plotly.Plots.resize(bestTimePeriodAAPLNode);
    //     Plotly.Plots.resize(bestTimePeriodBACNode);
    //     Plotly.Plots.resize(bestTimePeriodINTCNode);

    //     Plotly.Plots.resize(bestAlgorithmsAndTendenciesAAPLNode);
    //     Plotly.Plots.resize(bestAlgorithmsAndTendenciesBACLNode);
    //     Plotly.Plots.resize(bestAlgorithmsAndTendenciesINTCNode);
    // };

    // $scope.resizeBestTimePeriodPlots = function() {
    //     Plotly.Plots.resize(bestTimePeriodAAPLNode);
    //     Plotly.Plots.resize(bestTimePeriodBACNode);
    //     Plotly.Plots.resize(bestTimePeriodINTCNode);
    // };

    $scope.datesForPredictions = { 
        ten3StartDate: '2017-05-23',
        ten3EndDate: '2017-05-26',
        ten7StartDate: '2017-05-19',
        ten7EndDate: '2017-05-26',
        ten14StartDate: '2017-05-23',  
        ten14EndDate: '2017-06-06',
        ten30StartDate: '2017-05-23', 
        ten30EndDate: '2017-06-23'
    };

    // Dates and rates for predicitons
    $scope.ratesForPredicitons = [ 
        {
            name: 'Apple',
            title: 'Apple Inc. (AAPL)',
            prediction: [
                {ten3: [
                    {signal: 'fall'},
                    {accuracy: 0.291522}
                ]},
                {ten7: [
                    {signal: 'rise'},
                    {accuracy: 0.915206}
                ]},
                {ten14: [
                    {signal: 'rise'},
                    {accuracy: 0.7833368}
                ]},
                {ten30: [
                    {signal: 'fall'},
                    {accuracy: 0.4428571}
                ]}
            ]
        },
        {
            name: 'BankOfAmerica',
            title: 'Bank of America Corporation (BAC)',
            prediction: [
                {ten3: [
                    {signal: 'rise'},
                    {accuracy: 0.864524}
                ]},
                {ten7: [
                    {signal: 'rise'},
                    {accuracy: 0.7658955}
                ]},
                {ten14: [
                    {signal: 'rise'},
                    {accuracy: 0.9797779}
                ]},
                {ten30: [
                    {signal: 'rise'},
                    {accuracy: 0.9980813}
                ]}
            ]
        },
        {
            name: 'Intel',
            title: 'Intel Corporation (INTC)',
            prediction: [
                {ten3: [
                    {signal: 'rise'},
                    {accuracy: 0.9224737}
                ]},
                {ten7: [
                    {signal: 'rise'},
                    {accuracy: 0.9988833}
                ]},
                {ten14: [
                    {signal: 'rise'},
                    {accuracy: 0.6260659}
                ]},
                {ten30: [
                    {signal: 'fall'},
                    {accuracy: 0.02964916}
                ]}
            ]
        }
    ];

    $scope.formatNumber = function(i) {
        return Math.round(i); 
    }

    $scope.toMainPage = function() {
        $location.path('/');
    };

    // To enable linking through ID inside component
    $scope.scrollTo = function(id) {
        $location.hash(id);
        // console.log($location.hash());
        $anchorScroll();
    };

}]);