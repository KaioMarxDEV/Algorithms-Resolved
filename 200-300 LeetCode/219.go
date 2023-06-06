func containsNearbyDuplicates(nums []int, k int) bool {
	m := make(map[int]int, len(nums)/2)
	for i, v := range nums {
		if val, ok := m[v]; ok {
			if int(math.Abs(float64(i-val))) <= k {
				return true
			}
		}
		m[v] = i
	}
	return false
}