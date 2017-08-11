'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a < number_b){
    for(let num = number_a; num <= number_b; ++num)
      result.push(num);
  }
  else if (number_a > number_b){
    while (number_a >= number_b)
      result.push (number_a);
      number_a --;
  }
  else
    result.push(number_a);
  return result;
}

module.exports = get_integer_interval;

