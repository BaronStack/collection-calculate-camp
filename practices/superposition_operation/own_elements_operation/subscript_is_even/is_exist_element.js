'use strict';
function includes(result,element) {
  for (let item of result) {
    if (item === element) {
      return true;
      break;
    }
  }
  return false;
}
var is_exist_element = function(collection,element){
  let result = collection.filter(function (item) {
    if(collection.indexOf(item) % 2 === 0)
      return item;
  });
  return includes(result,element);
};
module.exports = is_exist_element;
