const spiralOrder = require('../src/spiral-matrix')

describe("Output the Matrix values in spiral",()=>{
    // it('Empty Matrix', () => {
    //     expect(spiralOrder([])).toStrictEqual([]);
    // });
    //
    // it('Matrix filled in order', () => {
    //     expect(spiralOrder([[1,2],[3,4]])).toStrictEqual([1,2,3,4]);
    // });
    
    it('Matrix filled in reverse order 2x2', () => {
        expect(spiralOrder([[4,3],
                                   [1,2]])).toStrictEqual([4,3,2,1]);
    });
    
    it('Matrix filled in reverse order 3x2', () => {
        expect(spiralOrder([[6,5,4],
                                   [1,2,3]])).toStrictEqual([6,5,4,3,2,1]);
    });
    it('Matrix filled in reverse order 3x3', () => {
        expect(spiralOrder([[9,8,7],
                                [2,1,6],
                                [3,4,5]])).toStrictEqual([9,8,7,6,5,4,3,2,1]);
    });

    it('Matrix filled in reverse order 3x3', () => {
        expect(spiralOrder([[9,8,7],
                                  [2,1,6],
                                  [3,4,5],
                                  [1,1,1]])).toStrictEqual([9,8,7,6,5,1,1,1,3,2,1,4]);
    });

    it('Matrix filled in reverse order 4x3', () => {
        expect(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toStrictEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
    });
})

