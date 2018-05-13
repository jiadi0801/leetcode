/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // discuss中天才实现C++：
    // int removeDuplicates(vector<int>& nums) {
    //     int i = 0;
    //     for (int n : nums)
    //         if (i < 2 || n > nums[i-2])
    //             nums[i++] = n;
    //     return i;
    // }

    if (nums.length === 0) return 0;

    // 遍历指针
    let fullpointer = 0;
    // 去除多余项后的尾指针
    let simppointer = -1;
    // 当前尾指针数字的在遍历指针上的重复次数
    let duplicate = 0;
    
    while(fullpointer < nums.length) {
        if (simppointer < 0) {
            duplicate = 1;
            simppointer++;
            nums[simppointer] = nums[fullpointer];
            fullpointer++;
            continue;
        }
        
        if (nums[fullpointer] !== nums[simppointer]) {
            // 重置重复次数
            simppointer++;
            nums[simppointer] = nums[fullpointer];
            duplicate = 1;
        } else {
            if (duplicate < 2) {
                simppointer++;
                nums[simppointer] = nums[fullpointer];
                duplicate++;
            }
        }

        fullpointer++;
    }
    return simppointer + 1;
};

module.exports = removeDuplicates;