let numArr = [];
const twoSums = (arr, int) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] > int) continue;
    if (arr[i] === int) return i;
    for (let j = 1; j < arr.length; j++) {
      // console.log("inner", arr[j]);
      if (arr[i] + arr[j] === int) return [i, j];
    }
  }
};
// console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSums([3, 2, 4], 6));
