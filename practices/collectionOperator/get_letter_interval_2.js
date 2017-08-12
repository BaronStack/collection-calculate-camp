'use strict';
function addLetter(number){
  if(number / 26 > 1){
    if (number % 26 === 0)
      return String.fromCharCode(number / 26 + 97 - number / 26) + String.fromCharCode(26 + 97 - 1);
    else
      return String.fromCharCode(number / 26 + 97 - 1) + String.fromCharCode(number % 26 + 97 - 1);
  }else {
    return String.fromCharCode(number + 97 - 1);
  }
}
function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a < number_b){
    for (let i = number_a ;i <= number_b ; ++i){
      result.push(addLetter(i));
    }
  }
  else if (number_a > number_b){
    for (let i = number_a ;i >= number_b; --i){
      result.push(addLetter(i));
    }
  }
  else
    result.push(addLetter(number_a));
  return result;
}

module.exports = get_letter_interval_2;

