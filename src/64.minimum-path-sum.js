/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const rowLen = grid.length;
    const colLen = grid[0].length;

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            grid[row][col] = grid[row][col] + min(row, col);
        }
    }

    function min(row, col) {
        if (row - 1 < 0 && col - 1 < 0) {
            return 0;
        } 
        else if (row - 1 < 0) {
            return grid[row][col - 1];
        }
        else if (col - 1 < 0) {
            return grid[row - 1][col];
        }
        else {
            return Math.min(grid[row][col - 1], grid[row - 1][col]);
        }
    }

    return grid[rowLen - 1][colLen - 1];
};

module.exports = minPathSum;