def merge_strings(word1, word2) -> str:
  len1 = len(word1)
  len2 = len(word2)
  merged = []
  i=0
  while i < len1 and i < len2:
    merged.append(word1[i])
    merged.append(word2[i])
    i += 1
  
  if i < len1:
    merged.extend(word1[i:])
  elif i < len2:
    merged.extend(word2[i:])

  return ''.join(merged)

def main():
  print(merge_strings("abc", "def"))
  print(merge_strings("abc", "defgh"))

if __name__ == "__main__":
  main()