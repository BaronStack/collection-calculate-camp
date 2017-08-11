'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
    let result = 0;
    for (let item of collection) {
        result += item;
    }
    return result;
}

module.exports = calculate_elements_sum;

