function countFeelings(string = '', array = []) {
    let result = 0
    for (let feeling of array) {
        let feelingChars = feeling.split('')
        if (feelingChars.every(char => string.includes(char))) {
            result += 1
        }
    }

    return `${result} feeling${result !== 1 ? 's' : ''}.`
}

console.log(countFeelings("yliausoenvjw", ['anger', 'awe', 'joy', 'love', 'grief']))
console.log(countFeelings("griefgriefgrief", ['anger', 'awe', 'joy', 'love', 'grief']))
console.log(countFeelings("abcdkasdfvkadf", ['desire', 'joy', 'shame', 'longing', 'fear']))