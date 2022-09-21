function findAverage(array) {
  // your code here
  let sum = 0;
  if (array.length < 1) {
    return 0;
  } else {
    for (let i=0; i<array.length; i++) {
    sum += array[i];
    }
  }
  
  const sr = sum / array.length;
  return sr;
}
