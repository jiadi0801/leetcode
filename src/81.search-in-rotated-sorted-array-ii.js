/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums.length === 0) return false;

    // 最差时间复杂度O(N),
    // 如果是有序，那么用二分查找可缩减为O(logN)
    // 哈哈，虽然被错位，但实际上还是可以用二分法查找嘛，“有序”这个属性并没有改变
    // 时间上和有序数组一样还是O(N)，但是空间上由O(1)增加到O(logN)

    // 另一种思路，舍弃target一定不会存在的{?, mid}部分，可能存在的部分则靠移动左右指针逼近
    // 这样时间复杂度保持在O(logN)到O(n)之间，但空间复杂度为O(1)

    function searchSub(lp, rp) {
        let mid = Math.floor((lp + rp) / 2);
        if (nums[lp] === target || nums[rp] === target) return true;
        if (lp === mid) return false;
        return searchSub(lp, mid) || searchSub(mid, rp);
    }

    return searchSub(0, nums.length - 1);
};

module.exports = search;