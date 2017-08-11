'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  let num = collection.map(function (item) {
    return item * 3 + 2;
  }).reduce(function (num1,num2) {
    return num1 + num2;
  });
  return num;
}

module.exports = hybrid_operation;

