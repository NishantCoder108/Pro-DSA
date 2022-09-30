/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

Input: matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8


var kthSmallest = function (matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length - 1][matrix[0].length - 1]; // +1 because we don't want to forget the last number
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[i][j] <= mid) count++;
                else break;
            }
        }
        if (count < k) lo = mid + 1;
        else hi = mid;
    }
    return lo
};



//Another Approach------------
var kthSmallest = function (matrix, k) {

    let oneArr = []


    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix.length; j++) {

            oneArr.push(matrix[i][j])
        }
    }


    oneArr.sort((a, b) => a - b)

    // console.log(oneArr)
    // console.log(k)
    // console.log(oneArr[k])

    return oneArr[k - 1]
};