function repeatStr (n, s) {
  let str = '';
  while (n > 0) {
    str += s;
    n--;
  }
  return str;
}
