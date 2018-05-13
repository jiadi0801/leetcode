const expect = require('expect.js');

describe('73.set-matrix-zeroes', function () {
    it('should learn more');
});

describe('81.search-in-rotated-sorted-array-ii', function () {
    const search = require('../src/81.search-in-rotated-sorted-array-ii');
    it('nums = [2,5,6,0,0,1,2], target = 0, should return true', function () {
        let nums = [2,5,6,0,0,1,2], target = 0;
        expect(search(nums, target)).to.eql(true);
    });
    it('nums = [2,5,6,0,0,1,2], target = 3, should return false', function () {
        let nums = [2,5,6,0,0,1,2], target = 3;
        expect(search(nums, target)).to.eql(false);
    });
});
