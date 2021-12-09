/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    let arr = [];
    while(x > 0){
        let val = x/10;
        arr.push(val);
        x -= val;
        Math.round(2)
    }
};

console.log(isPalindrome(121));