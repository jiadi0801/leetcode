/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 采用二分法，时间复杂度O(log(MN))
    
    const rowLen = matrix.length;
    if (rowLen === 0) return false;
    const colLen = matrix[0].length;
    if (colLen === 0) return false;

    const nums = rowLen * colLen;

    let lp = 0, rp = nums - 1;

    function getRow(p) {
        return Math.floor(p / colLen);
    }
    function getCol(p) {
        return p % colLen;
    }

    let lp_row = getRow(lp),
        lp_col = getCol(lp),
        rp_row = getRow(rp),
        rp_col = getCol(rp);

    while(lp < rp && matrix[lp_row][lp_col] <= target && matrix[rp_row][rp_col] >= target) {
        if (matrix[lp_row][lp_col] === target || matrix[rp_row][rp_col] === target) {
            return true;
        }

        let mid = Math.floor((lp + rp) / 2);

        // 避免lp === mid 死循环
        if (mid === lp || mid === rp) {
            return false;
        }

        let midValue = matrix[getRow(mid)][getCol(mid)];
        if (midValue > target) {
            rp = mid;
        } else if (midValue < target) {
            lp = mid;
        } else {
            return true;
        }
    }

    // lp === rp时判断
    lp_row = getRow(lp),
    lp_col = getCol(lp),
    rp_row = getRow(rp),
    rp_col = getCol(rp);
    if (matrix[lp_row][lp_col] === target || matrix[rp_row][rp_col] === target) {
        return true;
    }

    return false;
};

module.exports = searchMatrix;