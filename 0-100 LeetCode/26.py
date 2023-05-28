from ast import List


def remove_duplicates_in_place(self, nums: List[int]) -> int:
	if not nums:
		return 0
	i = 0
	for j in range(1, len(nums)):
		if nums[j] != nums[i]:
			i += 1
			nums[i] = nums[j]
	return i + 1