'use strict';

function includes(collection_b,item) {
  for (let term of collection_b) {
    if (item % term === 0) {
      return true;
      break;
    }
  }
  return false;
}
function choose_divisible_integer(collection_a, collection_b) {
  let result = [];
  for (let item of collection_a) {
    if (includes(collection_b,item)) {
      result.push(item);
    }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
