'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  let result = [];
    while (number > 0) {
      number = Math.round(number*10)/10;
      result.push(number);
      number -= interval;
    }
  number =Math.round(number*10)/10;
  result.push(number);
  return result;
}

module.exports = spilt_to_zero;
