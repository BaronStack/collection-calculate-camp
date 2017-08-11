'use strict';
var rank_desc = function(collection){
  // collection.sort(compare(x,y));
  let compare = function (x,y) {  //比较函数进行解决
    if (x < y)
      return -1;
    else if (x > y)
      return 1;
    else
      return 0;
  }
  return collection.sort(compare);
};

module.exports = rank_desc;
