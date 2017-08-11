function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  collection_a.forEach(item =>{
    for (let term of collection_b) {
     if(item === term) {
       result.push(item);
     }
  }
  });
  return result;
}

module.exports = collect_same_elements;
