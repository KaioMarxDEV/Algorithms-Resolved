def twoSum(self, nums: list[int], target: int) -> list[int]:
    hashmap = {}
    i = 0
    while i < len(nums):
        diff = target - nums[i]
        if diff in hashmap:
            return [hashmap[diff], i]
        hashmap[nums[i]] = i
        i += 1