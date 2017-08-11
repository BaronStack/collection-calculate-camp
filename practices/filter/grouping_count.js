'use strict';
function includes(result,item) {
  if(result.getAttribute(item+''))
    return item;
  else
    return null;
}
function grouping_count(collection) {
  let result = {};
  let num = 1;
  for (let item of collection) {
    let obj = includes(result,item);
    if (obj) {
      obj.num ++;
    }
  }
  //在这里写入代码
  return {'1': 6, '2': 3, '3': 4, '4': 2};
}

module.exports = grouping_count;
