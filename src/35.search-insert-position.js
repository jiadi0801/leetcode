/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let position = 0;
    while (nums[position] < target) position++;
    return position;
};

module.exports = searchInsert;
