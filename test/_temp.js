const expect = require('expect.js');

describe('63.unique-paths-ii', function () {
    const uniquePathsWithObstacles = require('../src/63.unique-paths-ii');
    it('grid [[0,0,0],[0,1,0],[0,0,0]], return 2', function () {
        let target = [
            [0, 0, 0], 
            [0, 1, 0], 
            [0, 0, 0]];
        expect(uniquePathsWithObstacles(target)).to.eql(2);
    });
});
