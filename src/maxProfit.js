/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    if (!prices || prices.length < 1) return 0;
    let profit = 0;

    function isProfitable(CurrentDayPrice, nextDayPrice) {
        return CurrentDayPrice < nextDayPrice;
    }

    function sellStock(nextDayPrice, CurrentDayPrice) {
        return nextDayPrice - CurrentDayPrice;
    }

    for (let currentDay = 0;currentDay < prices.length;currentDay++) {
        let CurrentDayPrice = prices[currentDay];
        let nextDayPrice = prices[currentDay+1];
        if (isProfitable(CurrentDayPrice, nextDayPrice)) {
            profit += sellStock(nextDayPrice, CurrentDayPrice);
        }
    }
    return profit;
};

module.exports = maxProfit;