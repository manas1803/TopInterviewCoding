/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!mp.has(nums[i])) {
      mp.set(nums[i], 1);
    } else {
      mp.set(nums[i], mp.get(nums[i]) + 1);
    }
  }
  let k = 0;
  for (let [key] of mp) {
    nums[k] = key;
    k++;
  }
  return mp.size;
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
