const maxProfit = require('../src/maxProfit-i');

test('MaxProfit of nothing is 0', () => {
    expect(maxProfit([])).toBe(0);
});

test('MaxProfit of one element', () => {
    expect(maxProfit([1])).toBe(0);
});

test('MaxProfit of max lastest', () => {
    expect(maxProfit([1,2])).toBe(1);
});

test('MaxProfit of max init element', () => {
    expect(maxProfit([2,1])).toBe(0);
});

test('MaxProfit of one equal prices', () => {
    expect(maxProfit([2,2])).toBe(0);
});

test('MaxProfit of three increasing', () => {
    expect(maxProfit([1,2,3])).toBe(2);
});

test('MaxProfit of three increasing', () => {
    expect(maxProfit([1,3,2])).toBe(2);
});

test('MaxProfit of three increasing', () => {
    expect(maxProfit([2,3,1])).toBe(1);
});

test('MaxProfit of three increasing', () => {
    expect(maxProfit([2,1,3])).toBe(2);
});

test('MaxProfit of three increasing', () => {
    expect(maxProfit([3,2,1])).toBe(0);
});

test('MaxProfit of three increasing', () => {
    expect(maxProfit([3,1,2])).toBe(1);
});



