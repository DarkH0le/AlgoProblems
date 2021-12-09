/**
 * @param {number} material
 * @return {number}
 */
var arrangeCoins = function (material) {
    let stairs = 0

    while (isMaterialLeft(material) ){
        if(isMaterialEnough(material, stairs)) return stairs
            buildStair();
            updateMaterialSheet();
    }

    function buildStair() {
        stairs++;
    }

    function updateMaterialSheet() {
        material = material - stairs;
    }
    function isMaterialLeft(n) {
        return n > 0;
    }

    function isMaterialEnough(material, stairs) {
        return material - (stairs + 1) < 0;
    }

    return stairs
};

var arrangeCoins = function (n) {
    let counter = 0;
    let stairCase = 0;
    let stairIndex = 0;

    while (counter < n) {
        if (stairIndex === stairCase && stairCase) {
            stairIndex = 0;
            stairCase++;
        } else {
            stairIndex++
        }
        counter++;
    }
    return stairCase;
}
console.log(arrangeCoins(5))