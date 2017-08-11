'use strict';
function caculate_result(result) {
  let cout = [];
  if (result.length === 0) {
    cout.push(0);
    return cout;
  } else {
    let num_1 = 0, num_2 = 0, num_3 = 0;
    let num1_count = 0, num2_count = 0, num3_count = 0;
    for (let item of result) {
      if (item / 100 > 1) {
        num_1 += item;
        num1_count++;
      }
      else if (Math.floor(item / 100) === 0 && item / 10 > 1) {
        num_2 += item;
        num2_count++;
      }
      else {
        num_3 += item;
        num3_count++;
      }
    }
    if (num2_count === 0 && num3_count === 0)
      cout.push(num_1 / num1_count);
    else {
      cout.push(num_3 / num3_count);
      cout.push(num_2 / num2_count);
      cout.push(num_1 / num1_count);
    }
    return cout;
  }
}
var even_group_calculate_average = function (collection) {
  let result = collection.filter(function (item) {
    if ((collection.indexOf(item) + 1) % 2 === 0)
      return item;
  }).filter(function (item) {
    if (item % 2 === 0)
      return item;
  });
  return caculate_result(result);
};
module.exports = even_group_calculate_average;
