'use strict';

function choose_even(collection) {
  if(!collection || collection.length === 0)
    return;
  let result = [];
  for (let item of collection) {
    if(item % 2 === 0)
      result.push(item);
  }
  //在这里写入代码
  return result;
}

module.exports = choose_even;
