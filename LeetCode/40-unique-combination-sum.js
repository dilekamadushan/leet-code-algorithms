/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * Input: candidates = [2,3,5], target = 8
 * Output: [[2,2,2,2],[2,3,3],[3,5]]
 */
var combinationSum2 = function (candidates, target) {
    const sum = getSum(candidates);
    if (sum<target) return []
    let groups = candidates.reduce((r, a) => {
        r[a] = [...r[a] || [], a];
        return r;
    }, {});
    const groupCount = Object.keys(groups).length;
    if(groupCount ===1) {
        const quotient = target%candidates[0]
        if(quotient!==0) return [];
        const dividend = target/candidates[0]
        return [...candidates.slice(0,dividend)]

    };
    candidates.sort((a, b)=> a-b);
    const map = new Map();
    const dynamicMap = new Map();
    const answers = [];
    recursiveSeeker(0, candidates, target, [], map, dynamicMap)
    for (const pair of map.entries()) {
        answers.push(pair[1])
    }
    return answers;

};

const recursiveSeeker = (index, candidates, target, tempAns, answerMap, dynamicMap) => {
    if(dynamicMap.has(`${tempAns.toString()}`)) return ;
    if (index >= candidates.length) return ;
    const currentSum = getSum(tempAns);
    if (currentSum > target) return answerMap;
    if (currentSum === target) {
        dynamicMap.set(`${index}${tempAns.toString()}`,1);
       answerMap.set(tempAns.toString(),tempAns);
       return;
    }
    const temp = candidates[index];
    if((currentSum + temp) === target){
        dynamicMap.set(`${[...tempAns, temp].toString()}`,1);
        answerMap.set([...tempAns, temp].toString(), [...tempAns, temp])
        return ;
    }
    recursiveSeeker(index+1, candidates, target, [...tempAns, temp], answerMap, dynamicMap);
    recursiveSeeker(index+1, candidates, target, [...tempAns], answerMap, dynamicMap);

}

getSum = (arr) => {
    //console.log('array received', arr)
    return arr.reduce((a, b) => a + b, 0);
};

//console.log('Answers from function', (combinationSum2([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 30)));
console.log('Answers from function', (combinationSum2([1], 1)));




