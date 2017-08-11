'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  let result = collection.filter(function (item) {
    if (item % 2 === 0)
      return item;
  }).map(function (item) {
    return String.fromCharCode(item + 97 - 1);
  })
  return result;
}

module.exports = even_to_letter;
