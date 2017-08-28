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

    $scope.data = getRandomChartData($scope.labels.length);
    this.chartVisible = false;
    this.generateChart = function() {
      if (!this.chartVisible) {
        this.chartVisible = true;
      }
      this.shuffleData($scope.data);
    };
    this.shuffleData = function(array) {
      var currentIndex = array.length;
      var temporaryValue;
      var randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };
  });
})();
