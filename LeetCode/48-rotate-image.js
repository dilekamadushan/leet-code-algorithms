/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 */
var rotate = function(matrix) {
    const square = matrix.length;
    const copiedMatrix = []
    for(let i=0; i< square; i++){
        const row = matrix[i];
        const copiedRow = [...row];
        copiedMatrix.push(copiedRow);
    }

    for (let i = 0; i<square; i++ ){
        const rotatedRow = [];
        for (let j=square-1; j>=0; j--){
            rotatedRow.push(copiedMatrix[j][i])
        }
        matrix [i] = rotatedRow;

    }
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix)
console.log(matrix)

