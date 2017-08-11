'use strict';
var single_element = function(collection){
  let result = [];
  for (let i = 0;i < collection.length; ++i) {
    if ((i + 1) % 2 === 0)
      result.push(collection[i]);
  }
  return result.filter(function (item) {
    if (result.indexOf(item) === result.lastIndexOf(item))
      return item;
  });
};
module.exports = single_element;
