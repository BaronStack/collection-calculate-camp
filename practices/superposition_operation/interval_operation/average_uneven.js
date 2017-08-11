'use strict';

function average_uneven(collection) {
  //在这里写入代码
  let result = collection.filter(function (item) {
    if (item % 2 === 1)
      return item;
  });
  let num = (result.reduce(function (pre,cur) {
    return pre + cur;
  })) / result.length;
  return num ;
}

module.exports = average_uneven;
