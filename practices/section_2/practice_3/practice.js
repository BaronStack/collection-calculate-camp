function find(result,ch) {
  for (let item of result) {
    if (item.name === ch) {
      return item;
    }
  }
  return null;
}

function count_same_elements(collection) {
  //在这里写入代码
  /*let result = [];
  let reg = /\d{1,3}/g;
  let letter = /[a-z]/g;
  for (let item of collection) {
    let obj = {};
    if (item.match(reg)) {
      obj = find(result,item.match(letter).join());
      if(obj) {
        obj.count += parseInt(item.match(reg),10);
      }else {
        result.push({name:item.match(letter).join(),summary:parseInt(item.match(reg),10)});
      }

    }else {
      obj = find(result,item);
      if (obj) {
        obj.count ++;
      }else {
       result.push({name:item,summary:1});
      }
    }
  }*/
  let result = [];
  let num = 1;
  var reg = /(\d{1,3})/g;
  var letter = /[a-z]/g;
  for (let i = 0; i < collection.length - 1; ++i) {
    if (collection[i].match(letter).join() === collection[i + 1].match(letter).join()) {
      if (collection[i].match(reg) != null) {
        num += Number(collection[i].match(reg));
      } else {
        num += 1;
      }
    }
    else {
      if (collection[i].match(reg) != null) {
        num += parseInt(collection[i].match(reg));
        result.push({name: collection[i].match(letter).join(), summary: num - 1});
        num = 1;
      }
      else {
        result.push({name: collection[i].match(letter).join(), summary: num});
        num = 1;
      }

    }
  }
  if (collection[collection.length - 1].match(reg) != null) {

    result.push({
      name: collection[collection.length - 1].match(letter).join(),
      summary: parseInt(collection[collection.length - 1].match(reg), 10)
    });
  }
  return result;
  return result;
}

module.exports = count_same_elements;
