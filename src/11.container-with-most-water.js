/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 时间复杂度O(n^2)，空间复杂度O(1)
    // let water = 0;
    // let len = height.length;
    // for (let i = 0; i < len - 1; i++) {
    //     for (let j = i + 1; j < len; j++) {
    //         water = Math.max(water, (j - i) * Math.min(height[i], height[j]));
    //     }
    // }
    // return water;

    let water = 0;
    let l_pointer = 0; r_pointer = height.length - 1;
    while (l_pointer < r_pointer) {
        water = Math.max(water, Math.min(height[l_pointer], height[r_pointer]) * (r_pointer - l_pointer))
        if (height[l_pointer] < height[r_pointer]) {
            l_pointer++;
        } else {
            r_pointer--;
        }
    }
    return water;
};

module.exports = maxArea;