function findNextSquare(sq) {
    let root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
        return Math.pow(root + 1, 2);
    } else {
        return -1;
    }
}

console.log(findNextSquare(111))
console.log(findNextSquare(121)) // --> 144
console.log(findNextSquare(625)) // --> 676
console.log(findNextSquare(114)) // --> -1 