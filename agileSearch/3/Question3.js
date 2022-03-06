// import the required library
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let readInputLines = [];
let count ;
rl.on('line', (line) => {
    readInputLines.push(line);
    if (readInputLines.length===2){
        count = parseInt(line);
    }

    if(readInputLines.length=== count+2){
        mainFunction();
    }
})


/**
 * this function calculates the contested areas and other assignment details
 **/
const mainFunction = () => {
    const answers = [];
    let i = 0
    while (i< readInputLines.length) {
        const sizeArray = readInputLines[i].split(" ").map(number => parseInt(number));
        const totalSize = sizeArray[0] * sizeArray[1];
        const matrix = initializeOfficeRoom(sizeArray[0], sizeArray[1]);
        answers.push("Total " + totalSize.toString());
        i += 1;
        const numberOfEmployees = parseInt(readInputLines[i]);
        i += 1;
        const employees = [];
        for (let j = 0; j < numberOfEmployees; j++) {
            const employeeDetail = readInputLines[i].split(" ").map(element => {
                if (!isNaN(element)) {
                    return parseInt(element);
                }
                return element;
            });
            markCubicleInMatrix(employeeDetail[1], employeeDetail[2], employeeDetail[3], employeeDetail[4], matrix)
            employees.push(employeeDetail);
            i += 1
        }

        const metrics = calculateContestedAndOtherMetrics(matrix);
        answers.push("Unallocated " + metrics[0]);
        answers.push("Contested " + metrics[1]);
        employees.forEach(employee => {
            const sum = countCubicleAreaInMatrix(employee[1], employee[2], employee[3], employee[4], matrix);
            answers.push(employee[0] + " " + sum)
        });
        answers.push("");
    }
    // write the answers to a file
    answers.forEach(line => console.log(line));
    readInputLines = [];
    count = 0;

}
/**
 * @param x1 number breath of the room
 * @param x2 length of the room
 * this function initializes a 2d matrix of the office space
 **/
const initializeOfficeRoom = (x1, x2) => {
    const square = [];
    for (let i = 0; i < x2; i++) {
        const row = [];
        for (let j = 0; j < x1; j++) {
            row.push(0);
        }
        square.push(row);
    }
    return square;
}
/**
 * @param x1 x of diagonal start
 * @param y1 y of diagonal start
 * @param x2 x of diagonal end
 * @param y2 y of diagonal end
 * @param matrix matrix of the room
 * this function marks the area occupied by a cubicle in the room
 **/
const markCubicleInMatrix = (x1, y1, x2, y2, matrix) => {
    for (let i = y1; i < y2; i++) {
        for (let j = x1; j < x2; j++) {
            matrix [i][j] = matrix[i][j] + 1;
        }
    }

}
/**
 * @param x1 x of diagonal start
 * @param y1 y of diagonal start
 * @param x2 x of diagonal end
 * @param y2 y of diagonal end'
 * @param matrix matrix of the room
 * this function counts the area occupied by a cubicle in the room
 **/
const countCubicleAreaInMatrix = (x1, y1, x2, y2, matrix) => {
    let sum = 0;
    for (let i = y1; i < y2; i++) {
        for (let j = x1; j < x2; j++) {
            if (matrix [i][j] === 1) {
                sum += 1;
            }
        }
    }
    return sum;

}
/**
 * @param matrix matrix of the room
 * this function counts the contested and the unallocated area of the room
 **/
const calculateContestedAndOtherMetrics = (matrix) => {
    let contested = 0;
    let unallocated = 0
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            total += 1;
            // if cell is 0, it's unallocated
            if (row[j] === 0) {
                unallocated += 1;
                // if cell is not 1, that means it's contested
            } else if (row[j] !== 1) {
                contested += 1;
            }
        }
    }
    return [unallocated, contested];
}

/*readInputLines = ["26 33", "1","Alice 1 2 3 4"]
mainFunction();*/
