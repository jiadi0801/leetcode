/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let range = [0, 0];
    while(range[1] < nums.length - 1) {
        let reachMax = 0;
        for (let i = range[0]; i <= range[1]; i++) {
            let nextReach = i + nums[i] - range[1];  // i这个点能到达的位置 - 当前已经可以访问到的最远位置
            if (nextReach > reachMax) {
                reachMax = nextReach;
            }
        }

        if (reachMax === 0) {
            return false;
        }
    
        range = [range[1] + 1, range[1] + reachMax];
    }

    return true;
};

module.exports = canJump;