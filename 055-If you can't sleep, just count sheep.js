var countSheep = function (num){
  //your code here
  let arr = [];
  for (let i=1; i<=num; i++) {
    arr.push(i+' sheep...');
  }
  
  
  return arr.join('');
}
