/**
 * candidates = [2,2,3]
 * target = 7
 * @param candidates
 * @param target
 * @param sum
 * @param temp
 * @param index
 * @param result
 */

const combinationSum = (candidates, target, sum, temp, index, result)=> {

    if(sum === target) {
        result.push([...temp]);
        return;
    }
    if(sum > target) return;
    for(let i=index; i< candidates.length; i++){
        temp.push(candidates[i]);
        combinationSum(candidates, target, sum+candidates[i], [...temp], i, result)
        temp.pop();
    }
    return result;


}

console.log(combinationSum([1,2,3,4],7,0,[],0,[]))
