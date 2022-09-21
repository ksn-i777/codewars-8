function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0;
  if (marks.length == 1) {
    return marks[0]; 
  } else {
    for (let i=0; i<marks.length; i++) {
    sum += marks[i];
  }  
    return Math.floor(sum / marks.length);
  }
}
