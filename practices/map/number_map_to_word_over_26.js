'use strict';
var number_map_to_word_over_26 = function(collection){
  if (!collection || collection.length === 0)
    return;
  let result = [];
  for (let item of collection) {
    if (item > 26) {
      result.push('a' + String.fromCharCode(item % 26 - 1 + 97));
    }else {
      result.push(String.fromCharCode(item - 1 + 97));
    }
  }
  return result;
};

module.exports = number_map_to_word_over_26;
