'use strict';

function choose_multiples_of_three(collection) {
  if (!collection || collection.length === 0)
    return;
  let result = [];
  for (let item
    of
    collection
    ) {
    if (item % 3 === 0)
      result.push(item);
  }
  //在这里写入代码
  return result;
}

module.exports = choose_multiples_of_three;
