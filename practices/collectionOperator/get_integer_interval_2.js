'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let result = [];
  if (number_a < number_b) {
    for (let num = number_a; num <= number_b; ++num)
      if (num % 2 === 0)
        result.push(num);
  }
  else if (number_a > number_b) {
    for (let num = number_a; num >= number_b; --num)
      if (num % 2 === 0)
        result.push(num);
  }
  else {
    if (number_a % 2 === 0)
      result.push(number_a);
    else
      result.push(number_a);
  }
  return result;
}

module.exports = get_integer_interval_2;
