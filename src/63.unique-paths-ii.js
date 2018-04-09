/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const rowLen = obstacleGrid.length;
    const colLen = obstacleGrid[0].length;
    let count = 0;

    
    // seach(0, 0);
    count = revSearch();


    // 逆向遍历，维护一个一维数组，节省内存就取min{rowLen, colLen}，这里取colLen即可
    // 再优化，判断这个一维数组是否全0，如果是，则停止遍历
    function revSearch() {
        let rowArr = [];
        let bottomObstacle = false;
        for (let row = rowLen - 1; row >= 0; row--) {
            rowArr[row] = 0;
        }

        for (let col = colLen - 1; col >= 0; col--) {
            for (let row = rowLen - 1; row >= 0; row--) {
                if (obstacleGrid[row][col] === 1) {
                    // 底部线上是否有绊脚石
                    if (row === rowLen - 1) {
                        bottomObstacle = true;
                    }
                    rowArr[row] = 0;
                } else {
                    if (row === rowLen - 1) {
                        rowArr[row] = bottomObstacle ? 0 : 1;  // 底部线是否有绊脚石  0 0 <0> 0 1 0 , <0> 前面就有绊脚石 因此它本身到终点的path数为0
                    } else {
                        rowArr[row] = rowArr[row + 1] + rowArr[row];
                    }
                }
            }
        }
        return rowArr[0];
    }
    
    // 超时了，原因：对于sub grid，前面有多少个父节点，这些subgrid就会重复遍历多少遍
    function seach(row, col) {
        if (obstacleGrid[row][col] === 1) {
            return;
        }

        if (row === rowLen - 1 && col === colLen - 1) {
            count++;
            return;
        }
        
        if (row === rowLen - 1) {
            seach(row, col + 1);
        } else if (col === colLen - 1) {
            seach(row + 1, col);
        } else {
            seach(row, col + 1);
            seach(row + 1, col);
        }
    }

    return count;
};

module.exports = uniquePathsWithObstacles;