/**
 * @param {number[]} nums
 * @return {number}
 * nums = [2,3,1,1,4]
 */
var jump = function (nums) {
    // if only one element no need to jump
    if (!nums || nums.length === 1 || nums.length === 0) return 0;
    if(nums[0]===0) return Infinity;
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
            const firstAns = totalJumps + 1 + jump(nums.slice(currentStep + nums[currentStep]));
            const secondAns = totalJumps + 1 + jump(nums.slice(currentStep+nums[nextIndex]));
            if (firstAns < secondAns) return firstAns;
            return secondAns;

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
    if (step === 0) return undefined;
    let optimalStep = 0;
    let tempMax = 0;
    arr.slice(startIndex + 1, startIndex + 1 + step)
        .forEach((element, index) => {
            if (element >= tempMax) {
                optimalStep = index + startIndex + 1;
                tempMax = element;
            }
        });
    return optimalStep;
}

console.log(jump([5,9,3,2,1,0,2,3,3,1,0,0]))
