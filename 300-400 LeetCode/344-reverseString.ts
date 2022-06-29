// This is an extreme simply algo but what is cool in here is that does not
// any over engineering that often happens when you try to resolve something
// with a desnecessary and expensive approach
function reverseString(s: string[]): void {
  s = s.reverse()
};
reverseString(["h","e","l","l","o"]) //Expected ["o","l","l","e","h"]

// Runtime: 137 ms, faster than 63.49% of TypeScript online submissions for Reverse String.
// Memory Usage: 50.4 MB, less than 29.76% of TypeScript online submissions for Reverse String.