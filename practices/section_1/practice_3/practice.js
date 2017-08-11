function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let resul = [];
  for (let item of collection_a) {
    if (object_b.value.includes(item))
      resul.push(item);
  }
  return resul;
}

module.exports = collect_same_elements;
