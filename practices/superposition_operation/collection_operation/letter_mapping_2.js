'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  let num = String.fromCharCode(Math.ceil(collection.reduce (function(n1,n2) {
      return n2+n2;
    }) / collection.length));
  return num;
}

module.exports = average_to_letter;

