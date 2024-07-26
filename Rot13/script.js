// function rot13(message) {
//     const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'
//     let result = ''
//     for (const char of message) {
//         const index = getRealIndex(ALPHABETS.indexOf(char))
//         if (char === char.toUpperCase()) {
//             result += ALPHABETS[index].toUpperCase()
//         }
//         result += ALPHABETS[index]
//     }
//     console.log(result)
// }

// function getRealIndex(fakeIndex) {
//     if (fakeIndex >= 0 && fakeIndex <= 13) return fakeIndex + 13
//     return fakeIndex - 13
// }
function rot13(message) {
    const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
    const ALPHABETS_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (const char of message) {
        if (ALPHABETS.includes(char)) {
            const index = (ALPHABETS.indexOf(char) + 13) % 26;
            result += ALPHABETS[index];
        } else if (ALPHABETS_UPPER.includes(char)) {
            const index = (ALPHABETS_UPPER.indexOf(char) + 13) % 26;
            result += ALPHABETS_UPPER[index];
        } else {
            result += char;
        }
    }

    return result;
}

console.log(rot13("Hello, World!")); // Uryyb, Jbeyq!
console.log(rot13("Test 123!")); // Grfg 123!


console.log(rot13("Test"))