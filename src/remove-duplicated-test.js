const removeDuplicates = function (nums) {
    let lastSortedIndex = 0;
    const biggest = nums[nums.length-1];
    for (const index in nums) {
        let currentIndex = parseInt(index);
        if(nums[currentIndex] == biggest) {
            nums[lastSortedIndex+1] = biggest;
            lastSortedIndex += 1;
            return currentIndex < lastSortedIndex ? currentIndex + 1 : lastSortedIndex +1;
        }
        if (currentIndex == 0) continue;
        if (nums[currentIndex] > nums[lastSortedIndex]) {
            if (nums[currentIndex] > nums[lastSortedIndex]) {
                lastSortedIndex = lastSortedIndex + 1;
                nums[lastSortedIndex] = nums[currentIndex];
            }
        }
    }
    return lastSortedIndex +1;
};

console.log(removeDuplicates([1,1,2,2,3,3,4,4]))