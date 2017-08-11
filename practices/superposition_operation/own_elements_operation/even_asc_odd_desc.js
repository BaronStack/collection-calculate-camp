'use strict';
var asc = function cmp(x,y) {
  if (x > y)
    return 1;
  else
    return -1;
}//升序函数
var even_asc_odd_desc = function(collection){
  let even = collection.filter(function (item) {
    if (item % 2 === 0)
      return item;
  });
  let odd = collection.filter(function (item) {
    if (item % 2 === 1)
      return item;
  });
  return even.sort(asc).concat(odd.sort().reverse());
};
module.exports = even_asc_odd_desc;
