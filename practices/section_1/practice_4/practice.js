function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result = [];
  collection_a.forEach(item =>{
    if (object_b.value.includes(item.key))
      result.push(item.key);
  });
  return result;
}

module.exports = collect_same_elements;
