function invert(array) {
  let arr = [];
  if (array.length < 1) {
    return [];
  } else {
    for (let i=0; i<array.length; i++) {
      arr.push(-array[i]);
    }
  }
  
   return arr;
}
