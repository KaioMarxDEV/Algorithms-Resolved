'''
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both 
lower and upper cases, more than once.
'''
def reserveVowels(self, s: str) -> str:
  s = list(s)
  vowels = 'aeiouAEIOU'
  i, j = 0, len(s) - 1
  while i < j:
      if s[i] in vowels and s[j] in vowels:
        s[i], s[j] = s[j], s[i]
        i += 1
        j -= 1
      if s[i] not in vowels:
        i += 1
      if s[j] not in vowels:
        j += 1
  return ''.join(s)