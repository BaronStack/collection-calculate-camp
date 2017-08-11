'use strict';

function find_first_even(collection) {
  //在这里写入代码
  let num;
  for (let item of collection) {
    if (item % 2 === 0) {
      return item;
      break;
    }
  }
}

module.exports = find_first_even;

