/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // 这个题必须穷举，算法上无捷径，主要考虑的是边界条件的控制
    // slice end不包含end的值
    
    if (nums.length === 0) return [[]];

    let result = [[]];

    let len = nums.length;

    // 思路错误： [1234] -> [134] 获取不到
    // for (let eleNum = 1; eleNum <= len; eleNum++) {
    //     for (let i = 0; i <= len - eleNum; i++) {
    //         let subset = nums.slice(i, i + eleNum);
    //         if (subset.length === 1) {
    //             // 长度为1时，截掉尾部后，公共部分为[]，那么就会造成i重复
    //             result.push(subset);
    //         } else {
    //             let common = subset.slice(0, subset.length - 1);
    //             for (let j = i + eleNum - 1; j < len; j++) {
    //                 result.push([].concat(common, [nums[j]]));
    //             }
    //         }
    //     }
    // }

    // result.push([], i + subsets(i+1, len-1))

    for (let i = 0; i < len; i++) {
        let iSubset = [];
        for (let item = 0; item < result.length; item++) {
            let set = [].concat(result[item], [nums[i]]);
            iSubset.push(set);
        }
        result = result.concat(iSubset);
    }

    return result;
};

module.exports = subsets;