/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 初始range[0,0]，i可达到的位置范围为range，确定range中能到达下一个最远的位置，那么这个range确定好后就算一步，下一个range算第二步
    let jumpTime = 0;

    let range = [0, 0];
    while(range[1] < nums.length - 1) {
        let reachMax = 0;
        for (let i = range[0]; i <= range[1]; i++) {
            let nextReach = i + nums[i] - range[1];  // i这个点能到达的位置 - 当前已经可以访问到的最远位置
            if (nextReach > reachMax) {
                reachMax = nextReach;
            }
        }
    
        range = [range[1] + 1, range[1] + reachMax];
        jumpTime++;
    }

    return jumpTime;
};

module.exports = jump;
