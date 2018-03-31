const expect = require('expect.js');

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