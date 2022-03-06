const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * This question is similar to the two egg problem
 * Optimal testing strategy is defined by the formulae x(x+1)/2
 **/

/**
 * @param number number
 * @return number
 * This function solves the x(x+1)/2 = n to find out the starting current for optimal testing strategy testing
 * This formulae is derived from the famous two egg problem
 **/
const findTheOptimalStartingCurrent = (number) => {
    const discriminant = 1 - 4 * (-2 * number);
    const root1 = (-1 + Math.sqrt(discriminant)) / (2);
    const root2 = (-1 - Math.sqrt(discriminant)) / (2);
    if (root1 > root2) return Math.round(root1);
    return Math.round(root2);
}
/**
 * @param startingPoint
 * @param maximumCurrent
 * @return number
 * This function adds values x+ x-1 + x-2 + x-3 + x-4
 **/
const calculateNumberOfTests = (startingPoint, maximumCurrent) => {
    if (startingPoint === 1) return 0
    let sum = 0;
    let i = 0;
    while (sum < maximumCurrent && startingPoint > 0) {
        sum += startingPoint;
        i += 1;
        startingPoint -= 1;
    }
    if (sum<maximumCurrent){
        return i + (maximumCurrent-sum-1);
    }
    if (i!==1) {
        return (i+(maximumCurrent-(sum-(startingPoint+1))-1));
    }
    return i;
}
/**
 * this function calculates the worst number of tests for each value of current in the file
 * @param inputLines
 **/
const mainFunction = (inputLines) => {
    const answers = [];
    for (let i = 0; i < inputLines.length; i++) {
        const maximumCurrent = parseInt(inputLines[i]);
        // get the starting point for
        const startingCurrent = findTheOptimalStartingCurrent(maximumCurrent);
        const answer = calculateNumberOfTests(startingCurrent, maximumCurrent);
        answers.push(answer);
    }
    // write to std
    answers.forEach(line => console.log(line));

}

const readInputLines = [];
rl.on('line', (line) => {
    if (line==="0"){
        mainFunction(readInputLines);
        process.exit(0);
    }
    readInputLines.push(line);
});
