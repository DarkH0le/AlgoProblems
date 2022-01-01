/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let xRange = {lowerBound: 0, upperBound: matrix[0].length - 1};
    let yRange = {lowerBound: 0, upperBound: matrix.length - 1};
    const limit = matrix[0].length * matrix.length;
    let currentPosition = {};
    currentPosition.x = 0;
    currentPosition.y = 0;
    let consulted = 0;
    let newArr = [];
    
    
    newArr.push(consultValue(currentPosition));
    yRange.lowerBound += 1;
    
    while (consulted < limit) {

        //Move to the right until hit limit
        while (currentPosition.x < xRange.upperBound && consulted < limit) {
            move(currentPosition, "rigth")
            newArr.push(consultValue(currentPosition));
        }
        xRange.upperBound -= 1;
        //Move to down until hit limit
        while (currentPosition.y < yRange.upperBound && consulted < limit) {
            move(currentPosition, "down")
            newArr.push(consultValue(currentPosition));
        }
        yRange.upperBound -= 1;

        //Move to the left until hit limit
        while (currentPosition.x > xRange.lowerBound && consulted < limit) {
            move(currentPosition, "left")
            newArr.push(consultValue(currentPosition));
        }
        xRange.lowerBound += 1;

        //Move to the up until hit limit
        while (currentPosition.y > yRange.lowerBound && consulted < limit) {
            move(currentPosition, "up")
            newArr.push(consultValue(currentPosition));
        }
        yRange.lowerBound += 1;
    }

    function move(currentPosition, direction) {
        let nextPosition = currentPosition;
        switch (direction) {
            case "rigth" :
                console.log("moving right")
                nextPosition.x += 1;
                break;
            case "down" :
                console.log("moving down")
                nextPosition.y += 1;
                break;
            case "left" :
                console.log("moving left")
                nextPosition.x -= 1;
                break;
            case "up" :
                console.log("moving up")
                nextPosition.y -= 1;
                break;
            default:
        }
        return nextPosition;
    }

    function consultValue(currentPosition) {
        consulted++;
        return (matrix[currentPosition.y][currentPosition.x])
    }

    return newArr;
};

module.exports = spiralOrder;