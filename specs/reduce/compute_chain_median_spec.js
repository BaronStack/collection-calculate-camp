'use strict';

var compute_chain_median = require('../../practices/reduce/compute_chain_median.js');

describe('compute_chain_median', function () {

  var collection = '1->4->6->2->3->10->9->8->11->20->19->30';

  it('计算给定链表的中位数', function () {

    var result = compute_chain_median(collection);
    expect(result).toEqual(9.5);
  });
});
