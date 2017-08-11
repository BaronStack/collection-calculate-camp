'use strict';

function compute_chain_median(collection) {
    let result = new Array();
    let num = 0;
    result = collection.split('->');
    if (result.length % 2 === 0) {
        num = (parseInt(result[result.length / 2 - 1]) + parseInt(result[result.length / 2])) / 2;
    }else {
        num = parseInt(result[(result.length - 1) / 2]);
    }
    return num;
  //在这里写入代码
}

module.exports = compute_chain_median;
