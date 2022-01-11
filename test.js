// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
const twoSum = (nums, target) => {
  let numToStart;
  let indexArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      continue;
    }
    if (nums[i] === target && target !== 0) return [i];
    numToStart = i;
    if (nums[i] + nums[i + 1] === target) indexArr.push(i, i + 1);
    const reducer = (previousValue, currentValue) => previousValue + currentValue === target;
    nums.reduce();
  }
  return indexArr;
};
// console.log(twoSums([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([-3, 4, 3, 90], 0));
console.log(twoSum([-1, -2, -3, -4, -5], -8)); //[2 ,4]
