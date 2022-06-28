function moveZeroes(nums: number[]): void {
  let index = 0;
  // pass all the numbers in nums verifying if it is different than zero
  // if is move the respective number to the first position saved on index
  // and increment index to the next first position, the position closer to the start
  for (let num in nums) {
    if (nums[num] !== 0) {
      nums[index] = nums[num]
      index++
    }
  }
  // here we have other iteration starting where the index stopped. so to add the zeros
  // we want to start ending by the next position of a non zero value on the nums array
  // to do that, we make this iteration adding zeros by an incrementation of "i".
  for(let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  // here we show the nums array with the alterations maded
  // this algo it is simple but effient because we didn't use another array
  // so this solution don't utilise of copying the values and merging them
  // making it more memory and space efficient
  console.log(nums)
};

console.log(moveZeroes([0,1,0,3,12])) // expected [1,3,12,0,0]
console.log(moveZeroes([0, 0, 1])) // expected [1, 0, 0]
