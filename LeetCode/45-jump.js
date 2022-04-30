/**
 * @param {number[]} nums
 * @return {number}
 * nums = [2,3,1,1,4]
 */
var jump = function (nums) {
    // if only one element no need to jump
    if (nums.length === 1) return 0;
    let totalJumps = 0;
    let currentStep = 0;
    // if he can jump with the current step
    if (nums.length - 1 <= nums[0]) return 1;
    const maxLength = nums.length;
    let isFinished = false;
    while (!isFinished) {
        if (nums[currentStep] === 1) {
            currentStep++;
        } else {
            let nextIndex = getNextOptimalPoint(nums, currentStep, nums[currentStep])
            if (nums[currentStep] > nums[nextIndex]) {
                currentStep += nums[currentStep]
            } else {
                currentStep += nums[nextIndex];
            }

        }

        totalJumps++;

        const maxJumpPossible = nums [currentStep];
        if (!maxJumpPossible) {
            isFinished = false;
            totalJumps++
            break;
        }
        if (maxJumpPossible > (maxLength - (currentStep + 1))) {
            isFinished = false;
            totalJumps++
            break;
        }
        if (maxJumpPossible === (maxLength - (currentStep + 1))) {
            isFinished = false;
            totalJumps++
            break;
        }


    }

    return totalJumps;

};

const getNextOptimalPoint = (arr, startIndex, step) => {
    let optimalStep = 0;
    let tempMax = 0;
    arr.slice(startIndex + 1, startIndex + 1 + step)
        .forEach((element, index) => {
            if (element > tempMax) {
                optimalStep = index + startIndex + 1;
                tempMax = element;
            }
        });
    return optimalStep;
}

console.log(jump([4,1,1,3,1,1,1]))
