/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rowLen = board.length;
    if (rowLen === 0) return false;
    const colLen = board[0].length;
    if (colLen === 0) return false;

    // 递归搜索，怎么计算时间复杂度？
    // 堆栈深度，最高达rolLen * colLen, 空间复杂度O(n)
    // map[] 性能堪忧啊，用t替换map[]，此处参考discussion。很高兴程序主体做到了最简的回溯算法

    function seachNext(hr, hc, matchpointer, matchedMap) {
        if (hr < 0 || hr > rowLen - 1 || hc < 0 || hc > colLen - 1) {
            return false;
        }

        // if (matchedMap[`${hr}_${hc}`]) {
        //     return false;
        // }

        if (board[hr][hc] !== word[matchpointer]) {
            return false;
        }

        // 能运行到此处，说明：这个节点没被使用过，且和word相应位置匹配.

        // 如果匹配节点是word最后一个字符，匹配成功
        if (matchpointer === word.length - 1) {
            return true;
        }

        // 没到最后一个字符，占坑本位
        
        // matchedMap[`${hr}_${hc}`] = true;
        let t = board[hr][hc];
        board[hr][hc] = true;
        // 并寻找下一个坑位
        matchpointer++;
        if (!seachNext(hr - 1, hc, matchpointer, matchedMap)
            && !seachNext(hr, hc + 1, matchpointer, matchedMap)
            && !seachNext(hr + 1, hc, matchpointer, matchedMap)
            && !seachNext(hr, hc - 1, matchpointer, matchedMap)
        ) {
            // 如果这个点周围的点不匹配，那么这个点就作废了。
            // 它曾经被标记为有效点，现在就要取消他的有效权，因为后续可能绕一个圈再次访问到它
            // matchedMap[`${hr}_${hc}`] = false;
            board[hr][hc] = t;
            return false;
        }

        return true;
    }

    // head row, head col
    let hr, hc;
    for (hr = 0; hr < rowLen; hr++) {
        for (hc = 0; hc < colLen; hc++) {
            let matchpointer = 0;
            let matchedMap = {};
            if (seachNext(hr, hc, matchpointer, matchedMap)) return true;
        }
    }
    return false;
};

module.exports = exist;