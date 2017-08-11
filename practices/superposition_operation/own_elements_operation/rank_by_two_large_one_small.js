'use strict';
let asc = function (x,y) {
  if (x > y)
    return 1;
  else
    return -1;
}
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  let result = collection.sort(asc);
  for (let i = 0;i < result.length; ++i) {
    if((i + 1) % 3 === 0) {
      result[i] = [result[i - 2],result[i - 2] = result[i]][0];//先交换第一个和第三个元素位置，再交换第二个和第一个元素位置
      result[i-1] = [result[i-2],result[i-2] = result[i-1]][0];
    }
  }
  return result;
}
module.exports = rank_by_two_large_one_small;
