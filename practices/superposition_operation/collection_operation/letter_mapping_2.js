'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  let num = Math.ceil(collection.reduce (function(n1,n2) {
      return n1+n2;
    }) / collection.length);
  return String.fromCharCode(num + 97 -1);
}

module.exports = average_to_letter;

