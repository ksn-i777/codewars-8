function abbrevName(name){
  const arr = name.split(' ');
  const str1 = arr[0].toUpperCase();
  const str2 = arr[1].toUpperCase();
  return str1.split('')[0]+'.'+str2.split('')[0]
    // code away

}
