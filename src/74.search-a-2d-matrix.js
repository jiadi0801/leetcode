/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 采用二分法，时间复杂度O(log(MN))
    
    let rowLen = matrix.length;
    let colLen = matrix[0].length;

    let p = Math.floor(rowLen * colLen / 2);
    
    let row = Math.floor(p / rowLen);
    let col = p % rowLen;
    

};