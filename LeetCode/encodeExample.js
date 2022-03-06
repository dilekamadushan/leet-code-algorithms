function searchSuggestions(repository, customerQuery) {
    // Write your code here
    const answers = []
    for(let j =2; j<=customerQuery.length;j++){
        const currentQuery = customerQuery.substring(0,j);
        const answerList = [];
        for(let i=0; i<repository.length; i++){
            const isIncluded = repository[i].includes(currentQuery);
            if(isIncluded){
                if (answerList.length<3){
                    answerList.push(repository[i])
                    answerList.sort();
                }
                else if(answerList[2]>repository[i]){
                   answerList[2]= repository[i];
                   answerList.sort();
                }
            }

        }
        answers.push(answerList);
    }
return answers;

}
const repository = ["mobile","mouse","moneyPot", "monitor","mousepad"]
customerQuery = "mouse"

console.log(searchSuggestions(repository,customerQuery));

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codeList
 *  2. STRING_ARRAY shoppingCart
 * apple,anything,orange
 * apple,green,orange
 */

function foo(codeList, shoppingCart) {
    // Write your code here

    for(let i=0;i<shoppingCart.length;i++){
        const shoppingItem = shoppingCart[i];
        for(let j=0; j<codeList.length;j++){
            const codeItem = codeList[j]
            if(shoppingItem.includes(codeItem)) return 1;
            if(codeItem.includes('anything')){
                //codeItem.replace('anything',)
                const codeItems = codeItem.split(',');
                const shoppingItems = shoppingItem.split(',');
                const index = codeItems.get('anything');
                if(shoppingItem[index-1]===codeItems[index-1] && shoppingItem[index+1]===codeItems[index+1]) return 1;
            }
        }
    }
    return 0;

}


