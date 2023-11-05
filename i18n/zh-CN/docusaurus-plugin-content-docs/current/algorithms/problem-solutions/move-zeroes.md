# 移动零

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

**示例 1:**

**输入:** nums = `[0,1,0,3,12]`<br/>
**输出:** `[1,3,12,0,0]`

**示例 2:**

**输入:** nums = `[0]`<br/>
**输出:** `[0]`

**提示**:

* `1 <= nums.length <= 104`
* `-231 <= nums[i] <= 231 - 1`

**进阶：** 你能尽量减少完成的操作次数吗？

## 题解

先来看官方的题解：

```python title="move-zeroes.official.py"
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        n = len(nums)
        left = right = 0
        while right < n:
            if nums[right] != 0:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
            right += 1      
```

:::note
我得说我并不喜欢这个解法，并且官方的解释非常难懂，我花了很久才明白它的真正意思。
:::

在这个解法中，通俗的说法是：
所有非零元素会被进行一次交换，交换到其应该在的位置上。
但如果它们本来就在正确的位置上，那么这次交换实际上是没有意义的。

### 我的解答

```python title="move-zeroes.py"
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        n = len(nums)
        p = 0; q = 1
        while p < n and q < n:
            if not nums[p] == 0:
                p += 1; continue

            if q < p + 1:
                q = p + 1
            while q < n:
                if nums[q] == 0:
                    q += 1; continue
                nums[p], nums[q] = nums[q], nums[p]
                break

            p += 1
```

再这个解答中，相反地，我们优先找到0元素，然后再找到非零元素，进行交换。
并且由于0元素只会向后交换，所以我们可以在找到非零元素后，快速移动一次非零元素指针。

这个解法更加符合读题的直觉，并且拥有更好的性能。
