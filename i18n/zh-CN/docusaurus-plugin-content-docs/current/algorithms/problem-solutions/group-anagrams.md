---
tags: ["力扣", "哈希表", "字符串"]
---
# 字母异位词分组

给你一个字符串数组，请你将 **字母异位词** 组合在一起。可以按任意顺序返回结果列表。

**字母异位词** 是由重新排列源单词的所有字母得到的一个新单词。

**示例 1:**

**输入:** strs = `["eat", "tea", "tan", "ate", "nat", "bat"]`<br/>
**输出:** \[\["bat"\],\["nat","tan"\],\["ate","eat","tea"\]\]

**示例 2:**

**输入:** strs = `[""]`<br/>
**输出:** \[\[""\]\]

**示例 3:**

**输入:** strs = `["a"]`<br/>
**输出:** \[\["a"\]\]

**提示：**

* `1 <= strs.length <= 104`
* `0 <= strs[i].length <= 100`
* `strs[i]` 仅包含小写字母

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
