function revNums(nums: number[], start: number, end: number) {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]]
    start++;
    end--;
  }
}

//  ==> THIS IS THE MAIN FUNCTION
// here we start calculating the new value to k, which will be the number of steps divided to the length
// but we not just dividing, we wanna get the rest of the division
function rotate(nums: number[], k: number): void {
  k = k % nums.length
  // now we reverse the array of number, because we want to use one strategy that is
  // reverse the number until they get to the desire position, the reverse can do this
  // but not alone, that's why we create a function to rotate different parts of the array
  // by given to the function a series of values of K.
  nums.reverse();
  // here will be reversing the first half until we get the k position
  revNums(nums, 0, k-1)
  // than here will be reversing till the end of the array.
  revNums(nums, k, nums.length - 1)
};