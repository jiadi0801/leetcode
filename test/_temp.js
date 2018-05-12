const expect = require('expect.js');

describe('73.set-matrix-zeroes', function () {
    it('should learn more');
});

describe('78.subsets', function () {
    const subsets = require('../src/78.subsets');
    it('nums = [1,2,3], return [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]', function () {
        let nums = [1,2,3];
        let result = [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]];
        expect(subsets(nums)).to.eql(result);
    });
});