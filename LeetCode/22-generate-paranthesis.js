/**
 * @param {number} n
 * @return {string []}
 * 3
 * ()()()
 * (()())
 * ((()))
 */


var generateParenthesis = function (n) {
    let results = new Map();
    results.set('()', 1);
    for (let i = 1; i < n; i++) {
        results = addParenthesisPair(results);
    }
    return generateArray(results);
};

const addParenthesisPair = (results) => {
    const temp = new Map();
    results.forEach((value, key)=>{
        //temp.set('(' + key + ')',1);
        //temp.set('()' + key,1);
        //temp.set(key + '()',1);
        addMiddleParenthesis(key, temp)
    })
    return temp;
}

const addMiddleParenthesis = (word, map)=>{
    let index = 0;
    while(index<word.length){
        tempIndex = word.indexOf('(',index);
        if(tempIndex !== -1) {
            const temp1 = word.substring(0,tempIndex)+'()'+word.substring(tempIndex);
            const temp2 = word.substring(0,tempIndex+1)+'()'+word.substring(tempIndex+1);
            map.set(temp1,1);
            map.set(temp2,1);
            index = tempIndex+1;
        }
        else if(word.indexOf(')',index)!==-1){
            index = word.indexOf(')',index);
            const temp1 = word.substring(0,index)+'()'+word.substring(index)
            const temp2 = word.substring(0,index+1)+'()'+word.substring(index+1);
            map.set(temp1,1);
            map.set(temp2,1);
            index = index+1;
        }
        else{
            break;
        }

    }
}

const generateArray = (results) => {
    const temp = [];
    results.forEach((value, key)=>{
       temp.push(key)
    })
    return temp;
}

