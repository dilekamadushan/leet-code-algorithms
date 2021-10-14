/**
 * @param {number[]} nums
 * @return {number[][]} //[1,2,3]  [1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2] [3,2,1]
 */
var permuteUnique = function (nums) {
    const map = new Map();
    return swap(nums, map, 0, []);
};

const swap = (nums, map) => {
    if (nums.length === 0) {
        return nums;
    }
    if (nums.length === 1) {
        return [nums];
    }

    const first = [nums[0]]
    const rest = swap(nums.slice(1), map)
    const solutions = []
    for (let i = 0; i < rest.length; i++) {
        const temp = rest[i]
        const newElem = [...first, ...temp]
        if (!map.has(newElem.toString())) {
            solutions.push(newElem);
            map.set(newElem.toString(), "")
        }

        for (let j = 0; j < temp.length; j++) {
            const left = temp.slice(0, j + 1);
            const right = temp.slice(j + 1)
            const newAns = [...left, ...first, ...right]
            if (!map.has(newAns.toString())) {
                solutions.push(newAns)
                map.set(newAns.toString(), "")
            }

        }
    }
    return solutions;

}

console.log(permuteUnique([1, 1]));
