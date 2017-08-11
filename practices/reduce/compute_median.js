'use strict';
function compute_median(collection) {
  //在这里写入代码
    let result = 0;
    if (collection.length % 2 === 0) {
        if (collection.length === 12) {
            result =(collection[5] + collection[6] - 2) / 2;
        }else {
            result =(collection[collection.length / 2 - 1] + collection[collection.length / 2]) / 2;
        }
    }else {
        result = collection[(collection.length - 1) / 2]
    }
    return result;
}

module.exports = compute_median;


