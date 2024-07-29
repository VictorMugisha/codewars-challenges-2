function betweenExtremes(numbers = []) {
    const max = numbers.reduce((acc, curr) => acc > curr ? acc : curr)
    const min = numbers.reduce((acc, curr) => acc < curr ? acc : curr)

    console.log("Maximum: ", max)
    console.log("Minimum: ", min)
    const result = max - min
    return result
}

betweenExtremes([23, 3, 19, 21, 16])