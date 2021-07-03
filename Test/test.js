'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
  let copyQ = [...q];
  let sortedQ = copyQ.sort();
  let bribes=0;
  let flag=false
  for(let i=0; i< q.length; i++){
    //console.log("Iterating for "+i)
    if( q[i]>q[i+1] && !flag){
      //console.log("First Bribe has occured "+i+" "+q[i]+" "+q[i+1])
      flag = true
      let tempShifts = q[i]-q[i+1];
      if(tempShifts>2){
        console.log('Too chaotic');
        return;
      }
      bribes+=tempShifts;
      //console.log('Creating the sorted array')
      let firstHalf = q.slice(0,i+2);
      let secondHalf =sortedQ.filter(element => ! firstHalf.includes(element));
      sortedQ = firstHalf.concat(secondHalf)
      //console.log(sortedQ)
    }
    if(flag && q[i]!==sortedQ[i]){
      //console.log("Again Bribe Found"+i+" "+q[i]+" "+sortedQ[i])
      const index = sortedQ.indexOf(q[i]);
      let tempBribes = index - i;
      //console.log('bribe wave '+ tempBribes);
      bribes+=tempBribes;
      let firstHalf = q.slice(0,i+1);
      let secondHalf =sortedQ.filter(element => ! firstHalf.includes(element));
      sortedQ = firstHalf.concat(secondHalf)

    }
  }
  console.log(bribes)


}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
}
