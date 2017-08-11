'use strict';
var map_to_three_multiples = function(collection){
  if (!collection || collection.length === 0)
    return;
  let result = [];
  for (let item of collection) {
    result.push(item * 3);
  }
  return result;
};

module.exports = map_to_three_multiples;
