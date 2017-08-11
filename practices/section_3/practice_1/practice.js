function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result=JSON.parse(JSON.stringify(collection_a));
  result.forEach(item=>{
    if(object_b.value.includes(item.key)){
    --item.count;
  }
});
  return result;
}

module.exports = create_updated_collection;
