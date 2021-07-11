/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits==="") return [];
    const map = new Map();
    map.set("2",["a","b","c"]);
    map.set("3",["d","e","f"]);
    map.set("4",["g","h","i"]);
    map.set("5",["j","k","l"]);
    map.set("6",["m","n","o"]);
    map.set("7",["p","q","r","s"]);
    map.set("8",["t","u","v"]);
    map.set("9",["w","x","y","z"]);

    let answersArray = map.get(digits[0]);

    for(let i=1;i<digits.length;i++){
        console.log("1",i);
        const sequenceArray = map.get(digits[i])
        console.log("sequence array",sequenceArray);
        let tempAnswerArray=[];
        for (let k=0;k<answersArray.length;k++){
            console.log("temp",answersArray[k]);
            for(let l = 0; l<sequenceArray.length; l++){
                let temp = answersArray[k]
                temp = temp+sequenceArray[l];
                console.log("element pushed",temp);
                tempAnswerArray.push(temp);
            }


        }
        answersArray = tempAnswerArray;
    }
    return answersArray.sort();
}

console.log(letterCombinations(""))
