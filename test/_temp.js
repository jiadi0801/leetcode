const expect = require('expect.js');

describe('59.spiral-matrix-ii', function () {
    const generateMatrix = require('../src/59.spiral-matrix-ii');
    it('n: 3, return [[1,2,3],[8,9,4],[7,6,5]]', function () {
        let target = [
            [1, 2, 3], 
            [8, 9, 4], 
            [7, 6, 5]];
        expect(generateMatrix(3)).to.eql(target);
    });
});
