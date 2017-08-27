var getRandomChartData = function(arrLength) {
  var arr = [];
  for (i = 0; i < arrLength; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }

  return arr;
};
