(function() {
  var app = angular
    .module("Angular-Chart-Generator", ["chart.js"])
    .config(function(ChartJsProvider) {
      ChartJsProvider.setOptions({
        colors: [
          "#803690",
          "#00ADF9",
          "#DCDCDC",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360"
        ]
      });
    });

  app.controller("ChartController", function($scope) {
    $scope.data = chartData;

    this.chartVisible = false;
    this.generateChart = function() {
      this.chartVisible = true;
    };
    $scope.labels = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ];
    $scope.series = ["Series A"];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: "y-axis-1",
            type: "linear",
            display: true,
            position: "left"
          },
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };
  });
})();
