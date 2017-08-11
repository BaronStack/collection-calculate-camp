'use strict';

function double_to_one(collection) {
  //在这里写入代码
    if(!collection || collection.length === 0)
        return;
    let result = [];
    for (let item of collection) {
      if(item.length >= 1) {
        for (let num of item) {
          result.push(num);
        }
      }else {
        result.push(item);
      }
    }
    return result;
}

module.exports = double_to_one;
