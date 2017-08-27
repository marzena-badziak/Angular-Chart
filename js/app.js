(function() {
  var app = angular.module("Angular-Chart-Generator", ["chart.js"]);

  app.controller("ChartController", function() {
    this.data = chartData;
    this.chartVisible = false;
    this.displayChart = function() {
      this.chartVisible = true;
    };
  });
})();
