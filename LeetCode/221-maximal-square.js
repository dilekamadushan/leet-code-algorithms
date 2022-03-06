/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let max = 0
    for (let i = 0; i < matrix.length; i++) {
        if (max !== 0 && matrix.length - i <= max) break;
        const row = matrix[i];
        for (let a = 0; a < row.length; a++) {
            if (max !== 0 && row.length - a <= max) break;
            let length = 0;
            for (let j = a; j < row.length; j++) {
                if (max !== 0 && length + row.length - j <= max) break;
                if (row[j] === "1") {
                    length += 1;
                    if (length === 1 && max < length) {
                        max = 1;
                    } else if (max < length) {
                        const isSquare = checkForSquare(i, j - (length - 1), length, matrix);
                        if (isSquare) {
                            max = length;
                        }
                    }

                } else {
                    length = 0;
                }
            }
        }

    }
    return max * max;

};

const checkForSquare = (i, j, length, matrix) => {
    for (let k = i + 1; k < i + length; k++) {
        for (let m = j; m < j + length; m++) {
            if (!matrix[k] || matrix[k][m] === "0") return false;
        }
    }
    return true;

}

const matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
const matrix2 = [["1", "1", "1", "1", "0"], ["1", "1", "1", "1", "0"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["0", "0", "1", "1", "1"]];
const matrix3 = [["1", "1", "1", "1"], ["0", "1", "1", "1"], ["0", "1", "1", "1"]];
console.log(maximalSquare(matrix))

