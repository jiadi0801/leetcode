const expect = require('expect.js');

const maxArea = require('../src/11.container-with-most-water');
const searchInsert = require('../src/35.search-insert-position');

describe('11.container-with-most-water', function () {
    it('[1,2,5] -> 2 ', function () {
        let height = [1,2,5];
        expect(maxArea(height)).to.eql(2);
    });
});

describe('35.search-insert-position', function () {
    it('[1,3,5,6],2 output: 1 ', function () {
        let height = [1,3,5,6];
        let nums = [1,3,5,6], target = 2;
        expect(searchInsert(nums, target)).to.eql(1);
    });
});