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
    }else {
      result['${item}'] = obj.num;
    }
  }
  //在这里写入代码
  return result;
}

module.exports = grouping_count;
