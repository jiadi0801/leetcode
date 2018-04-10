const expect = require('expect.js');

describe('64.minimum-path-sum', function () {
    const minPathSum = require('../src/64.minimum-path-sum');
    it('grid [[1,3,1],[1,5,1],[4,2,1]], return 7', function () {
        let target = [
            [1,3,1],
            [1,5,1],
            [4,2,1]];
        expect(minPathSum(target)).to.eql(7);
    });
});
