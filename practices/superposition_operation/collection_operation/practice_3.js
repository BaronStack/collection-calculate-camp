'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  let num = collection.filter(function (item) {
    if (item % 2 === 1)
      return item;
  }).map(function (item) {
    return item * 3 + 5;
  }).reduce(function (num1,num2) {
    return num1+num2;
  })
  return num;
}

module.exports = hybrid_operation_to_uneven;

