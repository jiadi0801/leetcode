/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a > b ? 1 : -1); // O(n*logn)

    let closet = Number.MAX_VALUE;
    // O(n^2) 
    for (let i = 0; i < nums.length - 2; i++) {
        let l_pointer = i + 1;
        let r_pointer = nums.length - 1;

        // 结束已经超过最接近的值，提升性能
        if (nums[l_pointer] + nums[l_pointer + 1] + nums[i] - target >= Math.abs(closet)) {
            return closet + target;
        }


        // 还是要遍历所有啊，难受，只不过遍历时间复杂度降到O(n)了
        while (l_pointer < r_pointer) {
            let delta = nums[l_pointer] + nums[r_pointer] + nums[i] - target;
            if (Math.abs(delta) < Math.abs(closet)) {
                closet = delta;
            }
            if (delta > 0) {
                r_pointer--;
            } else if (delta < 0) {
                l_pointer++;
            } else {
                return target;
            }
        }
    }
    return closet + target; 
};

module.exports = threeSumClosest;