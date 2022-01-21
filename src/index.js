// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) return result;
    let reverse = false;
    matrix.forEach((row) => {
        result = reverse ? result.concat(row.reverse()) : result.concat(row);
        reverse = !reverse;
    });
    return result;
};
