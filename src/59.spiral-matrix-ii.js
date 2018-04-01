/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let martrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        martrix.push(row);
    }

    let count = n * n;
    let row = 0, col = 0;
    let direction = 1;  // 右1 下2 左3 上4
    for (let i = 0; i < count; i++) {
        martrix[row][col] = i + 1;
        if (direction === 1) {
            if (col + 1 < n && !martrix[row][col + 1]) {
                col++;
            } else {
                direction = 2;
                row++;
            };
        }
        else if (direction === 2) {
            if (row + 1 < n && !martrix[row + 1][col]) {
                row++;
            } else {
                direction = 3;
                col--;
            };
        }
        else if (direction === 3) {
            if (col - 1 > -1 && !martrix[row][col - 1]) {
                col--;
            } else {
                direction = 4;
                row--;
            };
        }
        else if (direction === 4) {
            if (row - 1 > -1 && !martrix[row - 1][col]) {
                row--;
            } else {
                direction = 1;
                col++;
            };
        }
    }
    return martrix;
};

module.exports = generateMatrix;