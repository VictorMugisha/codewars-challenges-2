function squareUp(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let block = Array(n).fill(0); // Create a block of length n filled with zeros
        for (let j = 0; j < i; j++) {
            block[n - 1 - j] = i - j; // Fill the block with decreasing numbers
        }
        result = result.concat(block); // Add the block to the result
    }

    return result;
}




console.log(squareUp(3)) // => [0, 0, 1, 0, 2, 1, 3, 2, 1]
console.log(squareUp(2)) // => [0, 1, 2, 1]
console.log(squareUp(4)) // => [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]