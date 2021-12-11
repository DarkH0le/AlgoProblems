const maxProfit = require('../src/maxProfit-ii');

test('MaxProfit of nothing is 0', () => {
    expect(maxProfit([])).toBe(0);
});

test('Single value', () => {
    expect(maxProfit([1])).toBe(0);
});

test('Two days, first greater', () => {
    expect(maxProfit([2,1])).toBe(0);
});

test('Two days, socond greater', () => {
    expect(maxProfit([1,2])).toBe(1);
});

test('three days, increasing', () => {
    expect(maxProfit([1,2,3])).toBe(2);
});


test('three days, decreasing', () => {
    expect(maxProfit([3,2,1])).toBe(0);
});

test('three days, higher middle, min at start', () => {
    expect(maxProfit([1,3,2])).toBe(2);
});

test('three days, higher middle, min at the end', () => {
    expect(maxProfit([2,3,1])).toBe(1);
});

test('three days, higher middle, min at the end', () => {
    expect(maxProfit([2,3,1])).toBe(1);
});

test('three days, min middle', () => {
    expect(maxProfit([3,1,2])).toBe(1);
});

test('For days, Increasing', () => {
    expect(maxProfit([1,2,3,4])).toBe(3);
});

test('For days, decreasing', () => {
    expect(maxProfit([4,3,2,1])).toBe(0);
});

test('For days, decreasing', () => {
    expect(maxProfit([1,4,2,3])).toBe(4);
});

test('Leetcode Example 1', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe(7);
});

test('Leetcode Example 2', () => {
    expect(maxProfit([1,2,3,4,5])).toBe(4);
});

test('Leetcode Example 3', () => {
    expect(maxProfit([7,6,4,3,1])).toBe(0);
});
