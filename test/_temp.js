const expect = require('expect.js');

describe('73.set-matrix-zeroes', function () {
    it('should learn more');
});

describe('209.minimum-size-subarray-sum', function () {
    const {test} = require('../src/209.minimum-size-subarray-sum');
    it('nums = [2,3,1,2,4,3], target = 7, should return 2', function () {
        let nums = [2,3,1,2,4,3], target = 7;
        expect(test(target, nums)).to.eql(2);
    });
    it('nums = [2,3,1,2,4,3], target = 100, should return 0', function () {
        let nums = [2,3,1,2,4,3], target = 100;
        expect(test(target, nums)).to.eql(0);
    });
});
