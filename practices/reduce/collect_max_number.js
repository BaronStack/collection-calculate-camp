'use strict';
function max_number(collection) {
  let number = 0;
  for (let item of collection) {
    if (item > number) {
      number = item;
    }
  }
  return number;
}

function collect_max_number(collection) {
  if (!collection || collection.length === 0)
    return;
  //在这里写入代码
  return max_number(collection);
}

module.exports = collect_max_number;
