def contains_duplicate(self, nums) -> bool:
    unique = set()
    for n in nums:
        if n not in unique:
            unique.add(n)
        else:
            return True