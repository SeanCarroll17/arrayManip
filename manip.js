function arrManip(arr, nd, rd, push){
  if(nd == 'remove'){
    if(rd == 'end'){
      console.log(arr.pop())
    }else if(rd == 'beginning'){
      console.log(arr.shift())
    }
  }else if(nd == 'add'){
    if(rd == 'end'){
      arr.push(push);
      console.log(arr)
    } else if(rd == 'beginning'){
      arr.unshift(push);
      console.log(arr)
    }
  }
}
arrManip([1,2,3], 'add', 'end', 20);
