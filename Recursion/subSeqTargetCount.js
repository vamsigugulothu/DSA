function subSequence(arr, ind, target, sum) {
  if (ind === arr.length) {
    if (target === sum) {
      return 1;
    }
    return 0;
  }

  sum = sum + arr[ind];
  let l = subSequence(arr, ind + 1, target, sum);
  sum = sum - arr[ind];
  let r = subSequence(arr, ind + 1, target, sum);
  return l + r;
}

let arr = [3, 2, 1];
let target = 3;
console.log(
  "subSequence matcheing given target count: ",
  subSequence(arr, 0, target, 0)
);
