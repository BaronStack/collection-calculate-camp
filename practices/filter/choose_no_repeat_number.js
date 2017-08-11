'use strict';
function includes(result,item) {
  for (let num of result) {
    if (num === item) {
      return false;
      break;
    }
  }
  return true;
}

function choose_no_repeat_number(collection) {
  if (!collection || collection.length === 0)
    return;
  let result = [];
  for (let item of collection) {
    if (includes(result,item)) {
      result.push(item);
    }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_no_repeat_number;
