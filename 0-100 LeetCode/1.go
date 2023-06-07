package alg

func twoSum(nums []int, target int) []int {
	hm := map[int]int{}

	i := 0
	for i < len(nums) {
		d := target - nums[i]
		if _, ok := hm[d]; ok {
			return []int{hm[d], i}
		}

		hm[nums[i]] = i
		i += 1
	}

	return []int{0, 0}
}
