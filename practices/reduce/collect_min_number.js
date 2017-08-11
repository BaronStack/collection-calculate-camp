'use strict';
function min_number(collection) {
    let number = 99999;
    for (let item of collection) {
        if (item < number) {
            number = item;
        }
    }
    return number;
}
function collect_min_number(collection) {
  //在这里写入代码
    return min_number(collection);
}

module.exports = collect_min_number;

