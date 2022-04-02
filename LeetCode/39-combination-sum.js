/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 */
var combinationSum = function (candidates, target) {
    return recursiveSeeker(0, candidates, target, [], [], 0)

};

const recursiveSeeker = (index, candidates, target, tempAns, answers, depth) => {
    if (index >= candidates.length || depth > target) return answers;
    const currentSum = getSum(tempAns);
    if (currentSum > target) return answers;
    if (currentSum === target) {
        console.log("Ans found", tempAns.toString(), tempAns)
        const tempMap = new Map();
        tempMap.set(tempAns.toString(), tempAns);
        answers.forEach(answer => {
            tempMap.set(answer.toString(), answer)
        })
        const finalAns = [];
        for (const pair of tempMap.entries()) {
            finalAns.push(pair[1])
        }

        return finalAns;
    }
    const temp = candidates[index];
    const answers1 = recursiveSeeker(index, candidates, target, [...tempAns, temp], answers, depth + 1);
    const answers2 = recursiveSeeker(index + 1, candidates, target, [...tempAns], answers, depth + 1);
    const tempMap = new Map();
    const finalAns = [];
    answers.forEach(element => {
        tempMap.set(element.toString(), element)
    })
    answers1.forEach(element => {
        tempMap.set(element.toString(), element)
    })
    answers2.forEach(element => {
        tempMap.set(element.toString(), element)
    })
    for (const pair of tempMap.entries()) {
        finalAns.push(pair[1])
    }
    return finalAns;

}

getSum = (arr) => {
    //console.log('array received', arr)
    return arr.reduce((a, b) => a + b, 0);
};

console.log('Answers from function', (combinationSum([2, 3, 5], 8)));

