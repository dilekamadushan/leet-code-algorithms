/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b)=> a-b);
    const map = new Map();
    const answers = [];
    recursiveSeeker(0, candidates, target, [], map, 0)
    for (const pair of map.entries()) {
        answers.push(pair[1])
    }
    return answers;

};

const recursiveSeeker = (index, candidates, target, tempAns, answers, depth) => {
    if (index > candidates.length || depth > target) return answers;
    const currentSum = getSum(tempAns);
    if (currentSum > target) return answers;
    if (currentSum === target) {
       answers.set(tempAns.toString(),tempAns);
       return;
    }
    const temp = candidates[index];
    recursiveSeeker(index+1, candidates, target, [...tempAns, temp], answers, depth + 1);
    recursiveSeeker(index+1, candidates, target, [...tempAns], answers, depth + 1);

}

getSum = (arr) => {
    //console.log('array received', arr)
    return arr.reduce((a, b) => a + b, 0);
};

console.log('Answers from function', (combinationSum([10,1,2,7,6,1,5], 8)));




