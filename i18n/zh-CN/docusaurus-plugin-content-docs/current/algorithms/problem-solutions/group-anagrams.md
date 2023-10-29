---
tags: ["力扣", "哈希表", "字符串"]
---

# 字母异位词分组

[原题链接](https://leetcode.cn/problems/group-anagrams/description/)

## 题解

关键在于，我们该如何描述一个字符串是另一个字符串的字母异位词，
这个动作实际上是在压缩字符串的信息，我们可以通过排序来实现这个动作，
很明显我们并不需要这些字符串中的顺序信息。

```python title="group-anagrams.py"
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d = {}
        for s in strs:
            key = "".join(sorted(s)) # It's working faster than `tuple(sorted(s))`
            d[key] = d.get(key, []) + [s]
        return list(d.values())
```
