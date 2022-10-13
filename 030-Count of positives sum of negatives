function countPositivesSumNegatives(input) {
  // your code here
  let arr = [];
  if (input === null || input.length < 1) {
    return [];
  } else {
    let count = 0;
    let neg = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > 0) {
        count += 1;
      } else {
        neg -= input[i];
      }
    } arr = [count, -neg];
    return arr;
  }
}
