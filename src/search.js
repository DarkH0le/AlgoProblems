/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let search = function(nums, target) {

    const arrLength = nums.length +1;
    const recursiveSearch = function(index,target){
        
        
        if(nums[index] == target){
            return index;
        }
        //         1
        //   0 1 2 3 4 5
        // [-1,0,3,5,9,12]
        if(nums[index] < target ){
            const nextIndex = (index + Math.floor((arrLength - index)/2)) - 1;
            if(nextIndex > nums.length){
                for (let i = index; i < nums.length; i++) {
                    if(nums[i] == target){
                        return index;
                    }
                }
            }
            recursiveSearch(nextIndex,target)
        } else {
            const nextIndex = index - Math.ceil((arrLength - index)/2);
            if(nextIndex < 0){
                for (let i = index; i < nums.length; i++) {
                    if(nums[i] == target){
                        return index;
                    }
                }
            }
            recursiveSearch(Math.floor(index/2),target)
        }
    }
    recursiveSearch(Math.floor((nums.length + 1)/2),target)
};
search([-1,0,3,5,9,12],3)