'use strict';

function includes(collection_b,item) {
  for (let term of collection_b) {
    if (term === item) {
      return true;
      break;
    }
  }
  return false;
}
function choose_no_common_elements(collection_a, collection_b) {
  let result = [];
  for (let item of collection_a) {
    if (!includes(collection_b,item)) {
      result.push(item);
    }
  }
  return result;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
