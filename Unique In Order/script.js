function uniqueInOrder(sequence) {
    const result = []
    for (let element of sequence) {
        const resultLength = result.length
        if (result[resultLength - 1] === element) {
            continue
        }
        result.push(element)
    }
    console.log(result)
}

uniqueInOrder('AAAABBBCCDAABBB') //== ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')        // == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])      // == [1,2,3]