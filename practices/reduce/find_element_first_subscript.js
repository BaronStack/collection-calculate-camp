'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码
    // 可以利用collection.firstIndexOf(element)进行计算
    let result = 0;
    for (let item of collection) {
        if (item !== element) {
           result ++;
        }else {
            return result;
            break;
        }
    }
}

module.exports = calculate_elements_sum;

