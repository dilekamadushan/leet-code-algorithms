/**
 * @param {number[]} nums
 * @return {number[][]} //123
 */
var permute = function (nums) {
    return convertToInt(swap(nums, 0, []))
};

const swap = (nums) => {
    if (nums.length === 0) {
        return nums;
    }
    if (nums.length === 1) {
        return nums;
    }

    const first = nums[0].toString()
    const rest = swap(nums.slice(1))
    const solutions = []
    for (let i = 0; i < rest.length; i++) {
        const temp = rest[i].toString()
        solutions.push(first.concat(temp))
        for (let j = 0; j < temp.length; j++) {
            const modified = temp[j].concat(first);
            const currentAns = temp.replace(temp[j], modified)
            solutions.push(currentAns)

        }
    }
    return solutions;

}

const convertToInt = (nums) => {
    if (nums.length === 0) return nums;
    if (nums.length === 1) return [nums];
    const answer = [];
    for (let string of nums) {
        const arr = [];
        for (let char of string) {
            if (!isNaN(char)) {
                arr.push(parseInt(char))
            }

        }
        answer.push(arr);
    }

    return answer;
}

console.log(permute([0, 1, 1]));
