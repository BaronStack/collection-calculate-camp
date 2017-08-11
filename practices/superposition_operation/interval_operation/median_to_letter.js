'use strict';
function caculate_letter(item) {
  let result_letter = '';
  if (item / 26 > 0) {
    result_letter = String.fromCharCode(item / 26 + 97 - 1) + String.fromCharCode(item % 26 + 97 - 1);
  }
  return result_letter;
}
function median_to_letter(collection) {
  //在这里写入代码
  if (collection.length % 2 === 0) {
    return caculate_letter(Math.ceil((collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2));
  }else {
    return caculate_letter(collection[(collection.length - 1) / 2]);
  }
}

module.exports = median_to_letter;
