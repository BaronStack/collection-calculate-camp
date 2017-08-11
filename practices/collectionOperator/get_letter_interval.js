'use strict';
//charCodeAt();char---ASCII
//fromCharCode();ASCII---char
function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a < number_b) {
    for (let i = number_a;i <= number_b; ++i) {
      result.push(String.fromCharCode(i - 1 + 97));
    }
  }
  else if (number_a > number_b) {
    for (let i = number_a;i >= number_b; --i) {
      result.push(String.fromCharCode(i - 1 + 97));
    }
  }
  else
    result.push(String.fromCharCode(number_a - 1 + 97));
  return result;
}

module.exports = get_letter_interval;
