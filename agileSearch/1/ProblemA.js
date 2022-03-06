const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * @param noAdvertise integer
 * @param withAdvertise integer
 * @param cost integer
 * @return string
 * this function calculates the action depending on the input parameters
 **/
const decide = (noAdvertise, withAdvertise, cost) => {
    if (withAdvertise > (noAdvertise + cost)) return "advertise"

    if (noAdvertise === (withAdvertise - cost)) return "does not matter"

    return "do not advertise"
}

/**
 * this function calculates the action for each line in the input file and writes to output file
 * @param inputLines
 **/
const mainFunction = (inputLines) => {
    const answers = [];
    // check whether the input lines are empty
    if (inputLines.length > 0) {
        const limit = parseInt(inputLines[0])
        for (let i = 1; i <= limit; i++) {
            // convert each line into integers for processing
            const numberArray = inputLines[i].split(" ").map(number => parseInt(number));
            // call the decide function to find the action
            answers.push(decide(numberArray[0], numberArray[1], numberArray[2]))
        }
    }
    // write to std
    answers.forEach(line => console.log(line));

}

let count = 0;
let limit = 0;
const readInputLines = [];
rl.on('line', (line) => {
    if(count ===0){
        limit = parseInt(line);
        count  += 1;
    }
    readInputLines.push(line);
    if (readInputLines.length ===limit+1){
        mainFunction(readInputLines);
    }
});


