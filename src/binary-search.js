let search = function (nums, target) {

    //
    const recursiveSearch = function (nums, target, startIndex, endIndex) {

        let middleItemIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
        let middleItem = nums[middleItemIndex];
        if (middleItem == target) {
            return middleItemIndex;
        }
        if (startIndex > endIndex) return -1;

        if (middleItem < target) {
            return recursiveSearch(nums, target, middleItemIndex + 1, endIndex)
        } else {
            return recursiveSearch(nums, target, startIndex, middleItemIndex - 1)
        }
    }

    return recursiveSearch(nums, target, 0, nums.length - 1);
};

module.exports = search;