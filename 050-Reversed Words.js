function reverseWords(str){
  const arr = str.split(' ').reverse();
  
  const str2 = arr.join(' ');
  return str2;
}
