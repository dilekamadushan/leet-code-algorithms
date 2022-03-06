// import the required library
const fs = require("fs")


/**
 * @param inputFilePath string input file name
 * @return string[]
 * this function reads from a give file and returns an array of strings
 **/
const readFileIntoAnArray = (inputFilePath) => {
    // handling errors if the file doesn't exist
    try {
        // split by new line to create an array
        return fs.readFileSync(inputFilePath)
            .toString('UTF8')
            .split('\n');
    } catch (error) {
        console.error(`Error while reading file ${inputFilePath}`)
        // return empty array
        return [];

    }
}

/**
 * @param outPutFilePath string output file name
 * @param array string []
 * this function writes an array into a given file
 **/
const writeFileIntoAnArray = (outPutFilePath, array) => {
    const file = fs.createWriteStream(outPutFilePath);
    file.on('error', (err) => {
        console.error("Error in writing file")
    });
    // writing each element to file seperated by newline character
    array.forEach(line => file.write(line + '\n'));
    file.end();
}

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
 * @param inputFilePath string input file name
 * @param outputFilePath string output file path
 * this function calculates the action for each line in the input file and writes to output file
 **/
const mainFunction = (inputFilePath, outputFilePath) => {
    const inputLines = readFileIntoAnArray(inputFilePath);
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
    // write to output file
    writeFileIntoAnArray(outputFilePath, answers);

}



mainFunction("./1.txt", "./1.ans");
