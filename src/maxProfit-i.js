/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;

    function findProfitByDay(sellDay, buyDay) {
        return prices[sellDay] - prices[buyDay];
    }

    for (let buyDay = 0; buyDay < prices.length; buyDay++) {
        for (let sellDay = buyDay; sellDay < prices.length; sellDay++) {
            const dayProfit = findProfitByDay(sellDay, buyDay);
            if ( dayProfit> profit) {
                profit = dayProfit
            }
        }
    }
    return profit;
}

module.exports = maxProfit;