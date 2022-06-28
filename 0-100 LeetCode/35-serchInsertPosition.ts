// This algo takes a target number and verifying inside the given array
// the position if the target exist in array or the supposed position if we were add to it.
// it uses Binary Search for increase the perfomance
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    // calculate the middle position of the array
    const middle = Math.floor((left + right) / 2);
    // verify if the middle it is under or equals to the target
    // if it is under we have to make the middle calculation again trying to get closer to the target
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return left;
};