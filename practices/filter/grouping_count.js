'use strict';
function grouping_count(collection) {

  let collect = tostring(collection);
  let array = makearray(collect);
  let result = {};

  for(let item of array){
    result[item.key] = item.count;
  }

  return result;
}

function makearray(collection){
  let result=[];
  for(let item of collection){
    let obj = finds(result,item);
    if(obj){
      obj.count++;
    }else{
      result.push({key: item, count: 1});
    }
  }
  return result;
}

function finds(collection,ch){
  for(let item of collection){
    if(item.key === ch){
      return item;
    }
  }
  return null;
}

function tostring(collection){
  let result = [];
  for(let item of collection){
    result.push(item.toString());
  }
  return result;
}
module.exports = grouping_count;
