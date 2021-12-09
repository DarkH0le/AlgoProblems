var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let lastGood = 1;

        function findNext(i) {
            function findRemaining(i) {
                return n - i
            }
            return i + (Math.ceil(findRemaining(i) / 2))
        }

        for (let i = 1; i <= n; i=findNext(i)) {
            if (isBadVersion(i)) {
                for (; lastGood <=i; lastGood++) {
                    if(isBadVersion(lastGood)) return lastGood;
                }
            }
            lastGood = i;
        }
    }
};