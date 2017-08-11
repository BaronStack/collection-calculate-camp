'use strict';
var number_map_to_word = function(collection){
  let result = [];
  for (let item of collection) {
    result.push(String.fromCharCode(item - 1 + 97));  //ASCII转换为字符
  }
  return result;
};

module.exports = number_map_to_word;
