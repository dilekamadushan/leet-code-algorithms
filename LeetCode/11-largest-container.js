/**
 * @param {number[]} height
 * @return {number}
 */

// [1,8,6,2,5,4,8,3,7]
var maxArea = function (height) {

    let maxVolume = 0;
    let left=0;
    let right;

    height.forEach((number, index) => {
        const tempLeft = number;
        if (tempLeft > left) {
            let tempVolume = 0;
            for (let i = index; i < height.length; i++) {
                const currentLine = height[i];
                const minHeight = Math.min(tempLeft, currentLine);
                tempVolume = minHeight * (i - index);
                if (tempVolume > maxVolume) {
                    maxVolume = tempVolume;
                    left = tempLeft;
                    right = currentLine;
                }
            }
        }

    });
    console.log("Returning values", maxVolume, left, right);
    return maxVolume;
};

console.log(maxArea([1,1]))