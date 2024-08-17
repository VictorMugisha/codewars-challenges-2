function snail(array) {
    if (array.length === 0 || array[0].length === 0) return [];

    let result = [];
    let top = 0, bottom = array.length - 1;
    let left = 0, right = array[0].length - 1;

    while (top <= bottom && left <= right) {
        // Move Right
        for (let i = left; i <= right; i++) {
            result.push(array[top][i]);
        }
        top++;

        // Move Down
        for (let i = top; i <= bottom; i++) {
            result.push(array[i][right]);
        }
        right--;

        // Move Left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(array[bottom][i]);
            }
            bottom--;
        }

        // Move Up
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(array[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Example usage
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,9,8,7,4,5]
console.log(snail([[1, 2, 3], [8, 9, 4], [7, 6, 5]])); // [1,2,3,4,5,6,7,8,9]
console.log(snail([[]])); // []
console.log(snail([[1]])); // [1]
