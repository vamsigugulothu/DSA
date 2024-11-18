function isPaline(i, str) {
  if (str[i] !== str[str.length - i - 1]) {
    console.log("check", str[i], str[str.length - i - 1]);
    return false;
  }
  if (i >= str.length / 2) {
    return true;
  }
  return isPaline(i + 1, str);
}

console.log("check: ", isPaline(0, "madam"));

//multiple recusion calls
//0 1 1 2 3 5...
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log("check: ", fib(4));
