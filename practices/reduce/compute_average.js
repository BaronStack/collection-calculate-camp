'use strict';
function average(collection) {
    let s = 0;
    for (let item of collection) {
        s += item;
    }
    return s/collection.length;
}
function compute_average(collection) {
    //在这里写入代码
    if (!collection || collection.length === 0)
        return;
    let result = average(collection);
    return result;
}
module.exports = compute_average;

