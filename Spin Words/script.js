function spinWords(string) {
    const stringArray = string.split(' ')
    const result = []
    for (let str of stringArray) {
        if (str.length >= 5) {
            result.push(str.split('').reverse().join(''))
        } else {
            result.push(str)
        }
    }

    return result.join(' ')
}

spinWords("Hey fellow warriors")
spinWords("This is a test")
spinWords("This is another test")