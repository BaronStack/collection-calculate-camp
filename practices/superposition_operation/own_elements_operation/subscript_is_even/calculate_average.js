'use strict';
var calculate_average = function(collection){
  let result = collection.filter(function (item) {
    if ((collection.indexOf(item) + 1) % 2 === 0)
      return item;
  });
  let num = (result.reduce(function (pre,cur) {
    return pre + cur;
  })) / result.length;
  return num;
};
module.exports = calculate_average;
