(function() {
  var app = angular.module("Angular-Chart-Generator", ["chart.js"]);

  app.controller("ChartController", function() {
    this.data = chartData;
  });
})();
