'use strict';
function include(collection_a,item){
  for(let term of collection_a){
    if(term === item) {
      return true;
      break;
    }
  }
  return false;
}

function get_intersection(collection_a, collection_b) {
  if(!collection_a || collection_a.length === 0 || !collection_b || collection_b.length === 0)
    return;
  //在这里写入代码
  let result = [];
  for (let item of collection_b){
    if(include(collection_a,item)){
      result.push(item);
    }
  }
  return result;
}

module.exports = get_intersection;
