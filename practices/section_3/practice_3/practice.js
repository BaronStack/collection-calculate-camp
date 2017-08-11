function count_result(collection_a) {
  let cout = [];
  let num = 1;
  for (let i = 0; i < collection_a.length; ++i) {
    if (collection_a[i] === collection_a[i + 1]) {
      num++;
    }
    else {
      cout.push({key: collection_a[i - 1], count: num});
      num = 1;
    }
  }
  return cout;

}

function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = count_result(collection_a);
  let newResult = JSON.parse(JSON.stringify(result));
  newResult.forEach(item => {//对于数组newResult中的对象元素，其count满三减一
    for(var j = 0;
  j < object_b.value.length;
  ++j
)
  {
    if (item.key === object_b.value[j]) {
      let minus = Math.floor(item.count / 3);
      item.count -= minus;
    }
  }
})
  ;
  return newResult;
}

module.exports = create_updated_collection;
