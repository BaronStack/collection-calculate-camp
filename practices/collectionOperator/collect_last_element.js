'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  if(!collection || collection.length === 0)
    return;
  let result = collection[collection.length-1];//returns the last visible child of the root element
  return result;
}

module.exports = collect_last_element;
