'use strict';
var map_to_four_multiples_add_one = function(collection){
  if (!collection || collection.length === 0)
    return;
  let result = [];
  for (let item of collection) {
    result.push(item * 4 + 1);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
