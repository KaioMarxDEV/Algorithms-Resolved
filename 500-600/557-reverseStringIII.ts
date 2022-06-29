function reverseWords(s: string): string {
  let newS='';
  let sSplitted = s.split(' ') // [lets, take, leetcode, contest]
  for (let i=0; i < sSplitted.length; i++) {
    // sReverted[i] = 'stel'
    // sReverted[i] = 'ekat'
    // sReverted[i] = 'edocteel'
    // sReverted[i] = 'tsetnoc'
    const sReverted = sSplitted[i].split('').reverse().join('')
    // newS => [previous newS + sReverted with spaces added]
    newS += String(sReverted + ' ')
  }
  // this trim is necessary because the last word ends up with one more space than the original
  return newS.trim()
};
// It's not the best solution but was thougt it fast, just trying to parse the
// string to array and undo this process after reversing each word

// Runtime: 144 ms, faster than 24% of TypeScript online submissions for Reverse Words in a String III.
// Memory Usage: 49.4 MB, less than 44.34% of TypeScript online submissions for Reverse Words in a String III.

console.log(reverseWords("Let's take LeetCode contest"))