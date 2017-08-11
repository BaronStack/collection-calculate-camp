'use strict';
var calculate_median = function(collection){
  let result = collection.filter(function (item) {
    if ((collection.indexOf(item) + 1) % 2 === 0)
      return item;
  });
  if (result.length % 2 === 0) {
    return (result[result.length / 2 - 1] + result[result.length / 2]) / 2;
  }else {
    return (result[(result.length - 1) / 2]);
  }
}
module.exports = calculate_median;
