function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = JSON.parse(JSON.stringify(collection_a));
  result.forEach(item => {
    for(let term of object_b.value){
    if (item.key === term) {
      let minus = Math.floor(item.count / 3);
      item.count -= minus;
    }
  }
});
  return result;
}

module.exports = create_updated_collection;
