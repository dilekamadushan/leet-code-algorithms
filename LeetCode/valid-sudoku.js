/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (let i = 0; i < board.length; i++) {
        const arr = [];
        board[i].forEach(word => {
            if(word !== ".") arr.push(parseInt(word));
        })
        if (!checkValidity(arr)) return false;
    }

    for (let i = 0; i < board.length; i++) {
        const arr = [];
        for (let j = 0; j < board.length; j++) {
            if ( board[j][i] !==".") arr.push(parseInt(board[j][i]));
        }
        if (!checkValidity(arr)) return false;
    }

    for (let i = 0; i < board.length; i += 3) {
        for (let j = 0; j < board.length; j += 3) {
            const arr = [];
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    if(board[k][l] !==".") arr.push(parseInt(board[k][l]));
                }
            }
            if (!checkValidity(arr)) return false;
        }

    }
    return true;

};

const checkValidity = (arr) => {
    const set = new Set(arr);
    return set.size === arr.length;

}
const  board =
    [["5","3",".",".","7",".",".",".","."]
        ,["6",".",".","1","9","5",".",".","."]
        ,[".","9","8",".",".",".",".","6","."]
        ,["8",".",".",".","6",".",".",".","3"]
        ,["4",".",".","8",".","3",".",".","1"]
        ,["7",".",".",".","2",".",".",".","6"]
        ,[".","6",".",".",".",".","2","8","."]
        ,[".",".",".","4","1","9",".",".","5"]
        ,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));
