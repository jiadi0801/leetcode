/**
 * should run in O(n) time and constant space
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // O(n) time, O(n) space
    // const posArr = [];
    // nums.map(item => {
    //     if (item > 0) {
    //         posArr[item] = true;
    //     }
    // });
    // let i = 1;
    // while (posArr[i] && i < nums.length) {
    //     i++;
    // }
    // return i;

    /**
     * 遍历第一遍得到最小正数ai
     * 将最小正数ai放第一位，第一位放i处，准备工作完成。
     * 
     * l_pointer = 0 r_pointer=n-1
     * 终止条件：r_pointer <= l_pointer
     * 遍历条件：
     *  nums[l_pointer] - nums[0] == 0, l_pointer++;
     *  while delta != l_pointer||delta>n: delta = nums[l_pointer] - nums[0] < n, (nums[l_pointer]=nums[delta] nums[delta] = nums[l_pointer] 经典互换);
     * 
     * 结论：思路正确，但是还需要更清晰的思路
     */

    // const len = nums.length;
    // let minPosNum = Number.MAX_VALUE;
    // let pos;
    // for (let i = 0; i < len; i++) {
    //     if (nums[i] > 0 && minPosNum > nums[i]) {
    //         minPosNum = nums[i];
    //         pos = i;
    //     }
    // }
    // let tmp = nums[0];
    // nums[0] = minPosNum;
    // nums[pos] = tmp;
    // // 如果最小正数不为1，那么很明显，第一个确实的正整数就是1
    // if (minPosNum !== 1) {
    //     return 1;
    // }

    // let lp = 0; rp = len - 1;
    // while (lp <= rp) {
    //     let currentNum = nums[lp];
    //     let currentShouldBe = lp + 1;
    //     let thoeryMaxNum = rp + 1;
    //     let delta = currentNum - currentShouldBe;
        
    //     // 优先判断是否处于这个位置
    //     if (delta ===0) {
    //         lp++;
    //     }
    //     else if (currentNum < currentShouldBe || currentNum > thoeryMaxNum) {
    //         nums[lp] = nums[rp];
    //         rp--;
    //     }
    //     else {
    //         nums[lp] = nums[currentNum - 1];
    //         nums[currentNum - 1] = currentNum;
    //     }
    // }

    // return lp + 1
    

    let i = 0, n = nums.length;
    while (i < n) {
        if (nums[i] != i + 1 &&
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[i] != nums[nums[i] -1]
        ) {
            let tmp = nums[i];
            nums[i] = nums[tmp - 1];
            nums[tmp - 1] = tmp;
        }
        else {
            i++;
        }
    }

    for (i = 0; i < n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return n + 1;
};

module.exports = firstMissingPositive;