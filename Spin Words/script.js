function spinWords(string) {
    const stringArray = string.split(' ')
    const result = stringArray.map(str => {
        if (str.length >= 5) {
            return str.split('').reverse().join('')
        } else {
            return str
        }
    }).join(' ')
    return result
}

spinWords("Hey fellow warriors")
spinWords("This is a test")
spinWords("This is another test")