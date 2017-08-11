'use strict';

function amount_even(collection) {
  //在这里写入代码
  let num = collection.filter(function (item) {
    if (item % 2 === 0)
      return item;
  }).reduce(function (pre,cur) {
    return pre + cur;
  });
  return num;
}

module.exports = amount_even;
