const expect = require('expect.js');

describe('73.set-matrix-zeroes', function () {
    it('should learn more');
});

describe('80.remove-duplicates-from-sorted-array-ii', function () {
    const removeDuplicates = require('../src/80.remove-duplicates-from-sorted-array-ii');
    it('nums = [0,0,1,1,1,1,2,3,3], return 7', function () {
        let nums = [0,0,1,1,1,1,2,3,3];
        expect(removeDuplicates(nums)).to.eql(7);
    });
});
