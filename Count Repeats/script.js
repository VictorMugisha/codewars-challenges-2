function countRepeats(string = '') {
    let result = 0;
    for (let index = 0; index < string.length; index++) {
       if (string[index] === string[index+1]) result++
    }
    console.log(result)
}

countRepeats("abbbbc")