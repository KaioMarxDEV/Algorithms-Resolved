package main

import (
	"fmt"
)

func mergeStrings(word1 string, word2 string) string {
	r1 := []rune(word1)
	r2 := []rune(word2)

	len1 := len(r1)
	len2 := len(r2)

	merged := make([]rune, 0, len1+len2)

	i := 0
	for ; i < len1 && i < len2; i++ {
		merged = append(merged, r1[i])
		merged = append(merged, r2[i])
	}

	if i < len1 {
		merged = append(merged, r1[i:]...)
	} else if i < len2 {
		merged = append(merged, r2[i:]...)
	}

	return string(merged)
}

func main() {
	fmt.Println(mergeStrings("abc", "def"))
	fmt.Println(mergeStrings("abc", "defgh"))
	fmt.Println(mergeStrings("abcde", "def"))
}
