/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let day = 0;

    
    if (prices[day] < prices[day + 1]) {
        if (prices.length > 1) {
            if (prices[day] < prices[day + 2]) {
                let profit1 = prices[day + 1] - prices[day];
                let profit2 = prices[day + 2] - prices[day];
                return profit2 > profit1 ? profit2 : profit1;
            }

        }
        return prices[day + 1] - prices[day];
    } else {
        if (prices.length > 1) {
            if (prices[day + 1] < prices[day + 2]) {
                return prices[day + 2] - prices[day + 1];
            }
        }
    }

    return 0;
};

module.exports = maxProfit;