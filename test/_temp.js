const expect = require('expect.js');

describe('73.set-matrix-zeroes', function () {
    it('should learn more');
});

describe('79.word-search', function () {
    const exist = require('../src/79.word-search');
    it('board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]] word = ABCCED, return true', function () {
        board = [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E']
        ]
        let word = 'ABCCED';
        expect(exist(board, word)).to.eql(true);
    });
    it('board = [["A","B","C","E"]] word = BCE, return true', function () {
        board = [
            ['A', 'B', 'C', 'E']
        ]
        let word = 'BCE';
        expect(exist(board, word)).to.eql(true);
    });
    it('board = [["A","B","C","E"]] word = ECB, return true', function () {
        board = [
            ['A', 'B', 'C', 'E']
        ]
        let word = 'ECB';
        expect(exist(board, word)).to.eql(true);
    });
    it('board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]] word = ABCEFSADEESE, return true', function () {
        board = [
            ["A", "B", "C", "E"],
            ["S", "F", "E", "S"],
            ["A", "D", "E", "E"]
        ];
        let word = 'ABCEFSADEESE';
        expect(exist(board, word)).to.eql(true);
    });
});
