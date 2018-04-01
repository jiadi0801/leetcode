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

describe('41.first-missing-positive', function () {
    const firstMissingPositive = require('../src/41.first-missing-positive');
    it('nums: [1,2,0], return 3', function () {
        let nums = [1,2,0];
        expect(firstMissingPositive(nums)).to.eql(3);
    });
    it('nums: [3,4,-1,1], return 2', function () {
        let nums = [3,4,-1,1];
        expect(firstMissingPositive(nums)).to.eql(2);
    });
    it('nums: [1], return 2', function () {
        let nums = [1];
        expect(firstMissingPositive(nums)).to.eql(2);
    });
    it('nums: [2,1], return 3', function () {
        let nums = [2,1];
        expect(firstMissingPositive(nums)).to.eql(3);
    });
    it('nums: [1,3,2,1], return 4', function () {
        let nums = [1,3,2,1];
        expect(firstMissingPositive(nums)).to.eql(4);
    });
    it('nums: [4,1,2,3], return 4', function () {
        let nums = [4,1,2,3];
        expect(firstMissingPositive(nums)).to.eql(5);
    });
});

describe('45.jump-game-ii', function () {
    const jump = require('../src/45.jump-game-ii');
    it('nums: [2,3,1,1,4], return 2', function () {
        let nums = [2,3,1,1,4];
        expect(jump(nums)).to.eql(2);
    });
});

describe('55.jump-game', function () {
    const canJump = require('../src/55.jump-game');
    it('nums: [2,3,1,1,4], return true', function () {
        let nums = [2,3,1,1,4];
        expect(canJump(nums)).to.eql(true);
    });
    it('nums: [3,2,1,0,4], return false', function () {
        let nums = [3,2,1,0,4];
        expect(canJump(nums)).to.eql(false);
    });
});