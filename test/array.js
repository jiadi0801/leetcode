const expect = require('expect.js');

describe('11.container-with-most-water', function () {
    const maxArea = require('../src/11.container-with-most-water');
    it('[1,2,5] -> 2 ', function () {
        let height = [1,2,5];
        expect(maxArea(height)).to.eql(2);
    });
});

describe('35.search-insert-position', function () {
    const searchInsert = require('../src/35.search-insert-position');
    it('[1,3,5,6],2 output: 1 ', function () {
        let height = [1,3,5,6];
        let nums = [1,3,5,6], target = 2;
        expect(searchInsert(nums, target)).to.eql(1);
    });
});

describe('16.3sum-closest', function () {
    const threeSumClosest = require('../src/16.3sum-closest');
    // it('S = {-1 2 1 -4}, and target = 1. output: 2', function () {
    //     let nums = [-1, 2, 1, -4];
    //     let target = 1;
    //     expect(threeSumClosest(nums, target)).to.eql(2);
    // });
    it('S = [1,2,4,8,16,32,64,128], and target = 82. output: 82', function () {
        let nums = [1,2,4,8,16,32,64,128];
        let target = 82;
        expect(threeSumClosest(nums, target)).to.eql(82);
    });
});