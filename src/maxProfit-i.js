/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minprice = prices[0];
    let maxProfit = 0;

    function getProfit(i) {
        return prices[i] - minprice;
    }

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice)
            minprice = prices[i];
        else if (getProfit(i) > maxProfit)
            maxProfit = getProfit(i);
    }
    return maxProfit;
};

module.exports = maxProfit;