// function subSequence(arr, ind, res, result) {
//   console.log("subSequence", res);
//   if (ind >= arr.length) {
//     result.push([...res]);
//     return;
//   }
//   res.push(arr[ind]);
//   // take/pick index to the sequence
//   subSequence(arr, ind + 1, res, result);

//   res.pop();
//   // not take/un pick index to the sequence
//   subSequence(arr, ind + 1, res, result);
// }

// let a = [3, 1, 2];
// let result = [];
// subSequence(a, 0, [], result);
// console.log("Sub sequence", result);

//subsequence with target
function subSequence(arr, ind, res, result, target, sum) {
  if (ind === arr.length) {
    // subArray.push(result);
    console.log("Sub sequence", res, result, target, sum);
    if (target === sum) {
      result.push([...res]);
    }
    return;
  }

  res.push(arr[ind]);
  sum = sum + arr[ind];
  subSequence(arr, ind + 1, res, result, target, sum);
  res.pop();
  sum = sum - arr[ind];
  subSequence(arr, ind + 1, res, result, target, sum);
}

let arr = [3, 2, 1];
let result = [];
let target = 3;
subSequence(arr, 0, [], result, target, 0);
console.log("subSequence", result);
