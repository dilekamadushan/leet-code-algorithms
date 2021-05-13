'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let noOfTotalPairs = 0;

  const uniqueSockColors = [...new Set(ar)]
  console.log("unique colors of socks"+ uniqueSockColors);
  for (let i =0; i< uniqueSockColors.length;i++){
    let sock1 = uniqueSockColors[i];
    console.log("checking for sock1 "+ sock1);
    let tempMatches = 0;
    tempMatches = ar.filter(element => element=== sock1)
    if(tempMatches.length%2 ===0){
      console.log("pairs found is divisible by 2 "+ tempMatches.length);
      noOfTotalPairs+=(tempMatches.length/2);
    }
    else{
      console.log("pairs found is not divisible by 2 "+ tempMatches.length);
      noOfTotalPairs+=(tempMatches.length-1)/2
    }
    console.log("end of each loop"+ noOfTotalPairs+" "+ uniqueSockColors[i]);
  }

  console.log("After for loop "+ noOfTotalPairs);

  return noOfTotalPairs;

}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

  let result = sockMerchant(n, ar);

  ws.write(result + "\n");

  ws.end();
}
