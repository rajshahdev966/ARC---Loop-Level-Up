
export const PROBLEMS = [
  {
    id: "problem-1",
    status: "FINAL",
    statusBadge: "FINAL FORM ✅",
    statusBadgeStyle: "bg-primary-container text-on-primary-fixed rotate-2",
    lcNumber: "LEETCODE #33",
    title: "Search in Rotated Sorted Array",
    tapeText: "/// CONFIRMED ///",
    tapeStyle: "bg-secondary-fixed/90 rotate-1 text-secondary opacity-70",
    tag: "#BinarySearch",
    quote: "When the array is broken, binary search still finds a way.",
    approachArr: [
      {
        id: "approach-1",
        tabName: "APPROACH 01 [VILLAIN ERA]",
        name: "Approach 1: Linear Search (Just Scan It)",
        fileName: "// VILLAIN_LINEAR_SCAN.PY",
        language: "python",
        code: `class Solution:
    def search(self, nums: list[int], target: int) -> int:
        for i in range(len(nums)):
            if nums[i] == target:
                return i
        return -1`,
      },
      {
        id: "approach-2",
        tabName: "APPROACH 02 [COMEBACK]",
        name: "Approach 2: Find Pivot + Binary Search",
        fileName: "// PIVOT_COMEBACK.PY",
        language: "python",
        code: `class Solution:
    def search(self, nums: list[int], target: int) -> int:
        n = len(nums)

        pivot = 0
        for i in range(1, n):
            if nums[i] < nums[i - 1]:
                pivot = i
                break

        if nums[pivot] <= target <= nums[n - 1]:
            left, right = pivot, n - 1
        else:
            left, right = 0, pivot - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return -1`,
      },
      {
        id: "approach-3",
        tabName: "APPROACH 03 [FINAL FORM]",
        name: "Approach 3: Modified Binary Search (Optimal)",
        fileName: "// FINAL_FORM_BINARY_SEARCH.PY",
        language: "python",
        code: `class Solution:
    def search(self, nums: list[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = (left + right) // 2

            if nums[mid] == target:
                return mid

            if nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1

        return -1`,
      },
    ],
  },

  {
    id: "problem-2",
    status: "MID",
    statusBadge: "MID-ARC ⚡",
    statusBadgeStyle:
      "bg-tertiary-container text-on-tertiary-container -rotate-1",
    lcNumber: "LEETCODE #200",
    title: "Number of Islands",
    tapeText: "★ IN THE TRENCHES ★",
    tapeStyle:
      "bg-primary-container/90 -rotate-1 text-on-primary-fixed font-bold",
    tag: "#Graphs #Trees",
    quote: "Every island is just a connected component waiting to be discovered.",
    approachArr: [
      {
        id: "approach-1",
        tabName: "APPROACH 01 [BRUTE FORCE]",
        name: "Approach 1: Repeated Flood Fill",
        fileName: "// BRUTE_FORCE_FLOOD_FILL.PY",
        language: "python",
        code: `class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        count = 0

        def dfs(r, c):
            if r < 0 or r >= rows or c < 0 or c >= cols:
                return
            if grid[r][c] != "1":
                return

            grid[r][c] = "0"

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1":
                    count += 1
                    dfs(r, c)

        return count`,
      },
      {
        id: "approach-2",
        tabName: "APPROACH 02 [BFS ARC]",
        name: "Approach 2: Breadth-First Search",
        fileName: "// BFS_ISLAND_HUNT.PY",
        language: "python",
        code: `from collections import deque

class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])
        count = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] != "1":
                    continue

                count += 1
                queue = deque([(r, c)])
                grid[r][c] = "0"

                while queue:
                    cr, cc = queue.popleft()

                    for dr, dc in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                        nr, nc = cr + dr, cc + dc

                        if (0 <= nr < rows and
                            0 <= nc < cols and
                            grid[nr][nc] == "1"):
                            grid[nr][nc] = "0"
                            queue.append((nr, nc))

        return count`,
      },
      {
        id: "approach-3",
        tabName: "APPROACH 03 [FINAL FORM]",
        name: "Approach 3: DFS Connected Components",
        fileName: "// FINAL_FORM_DFS.PY",
        language: "python",
        code: `class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        rows = len(grid)
        cols = len(grid[0])

        def dfs(r, c):
            if not (0 <= r < rows and 0 <= c < cols):
                return
            if grid[r][c] != "1":
                return

            grid[r][c] = "0"

            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

        islands = 0

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1":
                    islands += 1
                    dfs(r, c)

        return islands`,
      },
    ],
  },

  {
    id: "problem-3",
    status: "VILLAIN",
    statusBadge: "VILLAIN ERA 💀",
    statusBadgeStyle: "bg-inverse-surface text-inverse-on-surface rotate-3",
    lcNumber: "LEETCODE #42",
    title: "Trapping Rain Water",
    tapeText: "⚠️ DANGER // TLE ZONE ⚠️",
    tapeStyle: "bg-error-container rotate-1 text-on-error-container font-black",
    tag: "#TwoPointers #Array",
    quote: "The water was never the problem. Finding the boundaries was.",
    approachArr: [
      {
        id: "approach-1",
        tabName: "APPROACH 01 [VILLAIN ERA]",
        name: "Approach 1: O(N²) Nested Scans (Pure Pain)",
        fileName: "// VILLAIN_BRUTE_FORCE.PY",
        language: "python",
        code: `class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)
        total_water = 0

        for i in range(n):
            left_max = max(height[:i + 1])
            right_max = max(height[i:])
            total_water += min(left_max, right_max) - height[i]

        return total_water`,
      },
      {
        id: "approach-2",
        tabName: "APPROACH 02 [PRECOMPUTED]",
        name: "Approach 2: Prefix/Suffix Maximum Arrays",
        fileName: "// PREFIX_SUFFIX_FIX.PY",
        language: "python",
        code: `class Solution:
    def trap(self, height: list[int]) -> int:
        n = len(height)

        if n < 3:
            return 0

        left_max = [0] * n
        right_max = [0] * n

        left_max[0] = height[0]
        for i in range(1, n):
            left_max[i] = max(left_max[i - 1], height[i])

        right_max[n - 1] = height[n - 1]
        for i in range(n - 2, -1, -1):
            right_max[i] = max(right_max[i + 1], height[i])

        water = 0

        for i in range(n):
            water += min(left_max[i], right_max[i]) - height[i]

        return water`,
      },
      {
        id: "approach-3",
        tabName: "APPROACH 03 [FINAL FORM]",
        name: "Approach 3: Two Pointers (Space Optimized)",
        fileName: "// FINAL_FORM_TWO_POINTERS.PY",
        language: "python",
        code: `class Solution:
    def trap(self, height: list[int]) -> int:
        left = 0
        right = len(height) - 1
        left_max = 0
        right_max = 0
        water = 0

        while left < right:
            if height[left] <= height[right]:
                if height[left] >= left_max:
                    left_max = height[left]
                else:
                    water += left_max - height[left]
                left += 1
            else:
                if height[right] >= right_max:
                    right_max = height[right]
                else:
                    water += right_max - height[right]
                right -= 1

        return water`,
      },
    ],
  },

  {
    id: "problem-4",
    status: "FINAL",
    statusBadge: "FINAL FORM ✅",
    statusBadgeStyle: "bg-secondary text-on-secondary -rotate-2",
    lcNumber: "LEETCODE #146",
    title: "LRU Cache",
    tapeText: "⚡ PURE ARCHITECTURE ⚡",
    tapeStyle:
      "bg-gradient-to-r from-tertiary-fixed via-secondary-fixed to-primary-fixed -rotate-1 text-on-surface font-bold",
    tag: "#Design #DLL",
    quote: "Sometimes the data structure is the algorithm.",
    approachArr: [
      {
        id: "approach-1",
        tabName: "APPROACH 01 [NAIVE]",
        name: "Approach 1: Array + Manual Shifting",
        fileName: "// NAIVE_CACHE.PY",
        language: "python",
        code: `class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = []

    def get(self, key: int) -> int:
        for i, (k, v) in enumerate(self.cache):
            if k == key:
                self.cache.pop(i)
                self.cache.append((k, v))
                return v

        return -1

    def put(self, key: int, value: int) -> None:
        for i, (k, v) in enumerate(self.cache):
            if k == key:
                self.cache.pop(i)
                break

        self.cache.append((key, value))

        if len(self.cache) > self.capacity:
            self.cache.pop(0)`,
      },
      {
        id: "approach-2",
        tabName: "APPROACH 02 [HASH MAP]",
        name: "Approach 2: HashMap + Ordered Structure",
        fileName: "// ORDERED_CACHE.PY",
        language: "python",
        code: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)

        self.cache[key] = value

        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
      },
      {
        id: "approach-3",
        tabName: "APPROACH 03 [FINAL FORM]",
        name: "Approach 3: HashMap + Doubly Linked List",
        fileName: "// FINAL_FORM_LRU.PY",
        language: "python",
        code: `class Node:
    def __init__(self, key=0, value=0):
        self.key = key
        self.value = value
        self.prev = None
        self.next = None


class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}

        self.left = Node()
        self.right = Node()

        self.left.next = self.right
        self.right.prev = self.left

    def remove(self, node):
        prev = node.prev
        nxt = node.next

        prev.next = nxt
        nxt.prev = prev

    def insert(self, node):
        prev = self.right.prev

        prev.next = node
        node.prev = prev
        node.next = self.right
        self.right.prev = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1

        node = self.cache[key]
        self.remove(node)
        self.insert(node)

        return node.value

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.remove(self.cache[key])

        node = Node(key, value)
        self.cache[key] = node
        self.insert(node)

        if len(self.cache) > self.capacity:
            lru = self.left.next
            self.remove(lru)
            del self.cache[lru.key]`,
      },
    ],
  },

  {
    id: "problem-5",
    status: "MID",
    statusBadge: "MID-ARC ⚡",
    statusBadgeStyle:
      "bg-tertiary-container text-on-tertiary-container rotate-2",
    lcNumber: "LEETCODE #76",
    title: "Minimum Window Substring",
    tapeText: "// OFF-BY-ONE SLAYER //",
    tapeStyle:
      "bg-error-container/80 rotate-1 text-on-error-container font-bold",
    tag: "#SlidingWindow",
    quote: "Shrink the window until the answer starts fighting back.",
    approachArr: [
      {
        id: "approach-1",
        tabName: "APPROACH 01 [BRUTE FORCE]",
        name: "Approach 1: Generate Every Substring",
        fileName: "// BRUTE_FORCE_WINDOWS.PY",
        language: "python",
        code: `from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = Counter(t)
        best = ""

        for left in range(len(s)):
            for right in range(left + 1, len(s) + 1):
                window = Counter(s[left:right])

                if all(window[c] >= need[c] for c in need):
                    current = s[left:right]

                    if not best or len(current) < len(best):
                        best = current

                    break

        return best`,
      },
      {
        id: "approach-2",
        tabName: "APPROACH 02 [SLIDING WINDOW]",
        name: "Approach 2: Variable Sliding Window",
        fileName: "// SLIDING_WINDOW.PY",
        language: "python",
        code: `from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not s or not t:
            return ""

        need = Counter(t)
        window = Counter()

        left = 0
        formed = 0
        required = len(need)

        best = (float("inf"), 0, 0)

        for right, char in enumerate(s):
            window[char] += 1

            if char in need and window[char] == need[char]:
                formed += 1

            while formed == required:
                if right - left + 1 < best[0]:
                    best = (right - left + 1, left, right)

                left_char = s[left]
                window[left_char] -= 1

                if (left_char in need and
                    window[left_char] < need[left_char]):
                    formed -= 1

                left += 1

        if best[0] == float("inf"):
            return ""

        return s[best[1]:best[2] + 1]`,
      },
      {
        id: "approach-3",
        tabName: "APPROACH 03 [FINAL FORM]",
        name: "Approach 3: Optimized Sliding Window",
        fileName: "// FINAL_FORM_WINDOW.PY",
        language: "python",
        code: `from collections import Counter

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s):
            return ""

        count = Counter(t)
        required = len(t)

        left = 0
        start = 0
        min_len = float("inf")

        for right, char in enumerate(s):
            if count[char] > 0:
                required -= 1

            count[char] -= 1

            while required == 0:
                if right - left + 1 < min_len:
                    min_len = right - left + 1
                    start = left

                count[s[left]] += 1

                if count[s[left]] > 0:
                    required += 1

                left += 1

        return "" if min_len == float("inf") else s[start:start + min_len]`,
      },
    ],
  },

  {
    id: "problem-6",
    status: "FINAL",
    statusBadge: "FINAL FORM ✅",
    statusBadgeStyle: "bg-primary-container text-on-primary-fixed -rotate-2",
    lcNumber: "LEETCODE #198",
    title: "House Robber",
    tapeText: "★ PURE DOPAMINE ★",
    tapeStyle:
      "bg-primary-container -rotate-1 text-on-primary-container font-black",
    tag: "#DP #SpaceOptimized",
    quote: "You don't need to rob every house. You need to choose the right ones.",
    approachArr: [
      {
        id: "approach-1",
        tabName: "APPROACH 01 [VILLAIN ERA]",
        name: "Approach 1: Recursive Brute Force",
        fileName: "// VILLAIN_RECURSION.PY",
        language: "python",
        code: `class Solution:
    def rob(self, nums: list[int]) -> int:
        def solve(i):
            if i >= len(nums):
                return 0

            rob_current = nums[i] + solve(i + 2)
            skip_current = solve(i + 1)

            return max(rob_current, skip_current)

        return solve(0)`,
      },
      {
        id: "approach-2",
        tabName: "APPROACH 02 [DP ARC]",
        name: "Approach 2: Top-Down Dynamic Programming",
        fileName: "// MEMOIZED_ROBBER.PY",
        language: "python",
        code: `class Solution:
    def rob(self, nums: list[int]) -> int:
        memo = {}

        def solve(i):
            if i >= len(nums):
                return 0

            if i in memo:
                return memo[i]

            rob_current = nums[i] + solve(i + 2)
            skip_current = solve(i + 1)

            memo[i] = max(rob_current, skip_current)
            return memo[i]

        return solve(0)`,
      },
      {
        id: "approach-3",
        tabName: "APPROACH 03 [FINAL FORM]",
        name: "Approach 3: Bottom-Up DP + O(1) Space",
        fileName: "// FINAL_FORM_SPACE_OPTIMIZED.PY",
        language: "python",
        code: `class Solution:
    def rob(self, nums: list[int]) -> int:
        prev_two = 0
        prev_one = 0

        for money in nums:
            current = max(
                prev_one,
                prev_two + money
            )

            prev_two = prev_one
            prev_one = current

        return prev_one`,
      },
    ],
  },
];
