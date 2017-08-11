'use strict';
function includes(result, item) {
  for (let term of result) {
    if (term === item) {
      return true;
      break;
    }
  }
  return false;
}
function double_to_one(collection) {
  if (!collection || collection.lengt === 0)
    return;
  let result = [];
  for (let item of collection) {
    if (item.length >= 1) {
      for (let num of item) {
        if (includes(result, num) === false)
          result.push(num);
      }
    } else {
      if (includes(result, item) === false)
        result.push(item);
    }
  }
  return result;
  //在这里写入代码
}

module.exports = double_to_one;
