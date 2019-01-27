/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  /**
   * time: O(n)
   */
  if (nums == null || nums.length == 0) {
      return 0;
  }
  let start = 0;
  let end = 0;
  let n = nums.length;
  let sum = 0;
  let res = Infinity;
  while (end < n) {
      while (end < n && sum < s) {
          sum += nums[end];
          end++;
      }
      while (start < end && sum >= s) {
          res = Math.min(res, end - start);
          sum -= nums[start];
          start++;
      }
  }
  return res == Infinity?0:res;

  /**
    time: O(n2), space: O(1)
    2 3 1 2 4 3
    5 4 3 6 7
    6 6 7 9
    8 10 10
    ↓
  */
  // let len = nums.length;
  // let minlen = len + 1;
  // for (let i = 0; i < len; i++) {
  //   let depth = 0;
  //   let pointer = i;
  //   let sum = 0;
  //   while (sum < s && pointer < len) {
  //     sum += nums[pointer];
  //     pointer++;
  //     depth++;
  //   }
  //   if (minlen > depth && sum >= s) {
  //     minlen = depth;
  //     if (minlen === 1) {
  //       return 1;
  //     }
  //   }
  // }
  // return minlen > len ? 0 : minlen;
};

exports.test = minSubArrayLen;
