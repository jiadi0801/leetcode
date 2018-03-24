const expect = require('expect.js');

const maxArea = require('../src/ContainerWithMostWater');

describe('ContainerWithMostWater', function () {
    it('[1,2,5] -> 2 ', function () {
        let height = [1,2,5];
        expect(maxArea(height)).to.eql(2);
    });
});