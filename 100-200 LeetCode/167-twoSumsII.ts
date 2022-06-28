// This algorith uses the binary search to create a sum between to nubers of the given array
// utilises this strategy because binaries searchs are awesome efficient to handle 
// big arrays. So the sum created is compared to the given target and if matchs returns the indexes with determined base
function twoSum(numbers: number[], target: number) {
  let left = 0
  let right = numbers.length-1
  while (left < right) {
    // calculates the sum between two pointers, similar with the concept of binaries search 
    let cur = numbers[left] + numbers[right ]
    // return 1 base index if the current sum is equal to the target
    if (cur === target) return [left+1, right+1]
    // if current is greater than the target, since the array is sorted we need to decrease the higher pointer
    // if current is lees than the target, since the array is sorted we need to increment the lower pointer
    // with this strategy we gonna get the two numbers only that summed gonna be exactly the same as the target value.
    cur > target ? right-- : left ++
  }
};

// Runtime: 91 ms, faster than 75.35% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
// Memory Usage: 43.1 MB, less than 97.07% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.