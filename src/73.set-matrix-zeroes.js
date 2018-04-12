/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 额外增加一个数组，来标记哪些0是自然的，哪些0是生成的，空间复杂度O(mn)，抛弃

    // 第一次遍历，将(i,j)的0 放到 (i,0) (0,j), 第二次遍历再将该行该列置0

    const rowLen = matrix.length;
    const colLen = matrix[0].length;

    let col0 = 1;

    for (let i = 0; i < rowLen; i++) {
        if (matrix[i][0] === 0) col0 = 0;
        for (let j = 1; j < colLen; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = rowLen - 1; i >= 0; i--) {
        for (let j = colLen - 1; j > 0; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (col0 === 0) matrix[i][0] = 0;
    }
};