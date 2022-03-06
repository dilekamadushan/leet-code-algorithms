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
 * Complete the 'minSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY num
 *  2. INTEGER k
 */

function minSum(num, k) {
    // Write your code here
    // greedy algorithm is used, we select the highest element in each case and divide by two
    // and insert into the array
    for (let i=0; i<k;i++){
        console.log("Before processing", num)
        const maxElement = Math.max(...num);
        const index = num.indexOf(maxElement);
        console.log("Max element "+maxElement);
        num.splice(index,1)
        console.log("new array",num);
        const halfValue = getFloor(maxElement);
        num.push(halfValue);
    }

    const sum = getSum(num);
    console.log("Sum ", sum);
    return sum;


}

const getFloor = num => Math.ceil(num/2)

const getSum = num => num.reduce((a,b)=>a+b,0)


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numCount = parseInt(readLine().trim(), 10);

    let num = [];

    for (let i = 0; i < numCount; i++) {
        const numItem = parseInt(readLine().trim(), 10);
        num.push(numItem);
    }

    const k = parseInt(readLine().trim(), 10);

    const result = minSum(num, k);

    ws.write(result + '\n');

    ws.end();
}
