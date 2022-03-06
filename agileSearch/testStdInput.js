const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
        console.log("Execute my logic here"+ readInputLines)
    }
});
