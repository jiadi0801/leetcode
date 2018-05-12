const expect = require('expect.js');

describe('73.set-matrix-zeroes', function () {
    it('should learn more');
});

describe('74.search-a-2d-matrix', function () {
    const searchMatrix = require('../src/74.search-a-2d-matrix');
    it('matrix [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target 3, return true', function () {
        let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
        let target = 3;
        expect(searchMatrix(matrix, target)).to.eql(true);
    });
    it('matrix [[1,3]], target 2, return false', function () {
        let matrix = [[1,3]];
        let target = 2;
        expect(searchMatrix(matrix, target)).to.eql(false);
    });
    it('matrix [[1]], target 2, return false', function () {
        let matrix = [[1]];
        let target = 2;
        expect(searchMatrix(matrix, target)).to.eql(false);
    });
    it('matrix [[1]], target 1, return true', function () {
        let matrix = [[1]];
        let target = 1;
        expect(searchMatrix(matrix, target)).to.eql(true);
    });
    it('matrix [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target 15, return false', function () {
        let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]];
        let target = 15;
        expect(searchMatrix(matrix, target)).to.eql(false);
    });
});