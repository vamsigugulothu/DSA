//reverse array using recursion

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// approach1
function reverseArray(arr, l, r) {
  if (l >= r) return;
  swap(arr, l, r);
  console.log(arr);
  reverseArray(arr, l + 1, r - 1);
}

// approach2
function revArray(arr, i) {
  let n = arr.length;
  console.log(n);
  if (i >= n / 2) return;
  swap(arr, i, n - i - 1);
  revArray(arr, i + 1);
  console.log(arr);
}

let arr = [1, 2, 7, 4, 5, 6, 8, 9];
// reverseArray(arr, 0, arr.length - 1);
revArray(arr, 0);
console.log("reversed: ", arr);
