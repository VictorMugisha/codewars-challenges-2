function sort(array, len) {
    const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < len; i++) {
        let prevWord = array[i]
        for (let j = 0; j < len; j++) {
            let nextWord = array[j]
            
            for (let char of prevWord) {
                // if (i !== j && (ALPHABETS.indexOf(char) < ALPHABETS.indexOf(nextWord[j])))
            }

        }
    }
}

function santaSort(unsortedNames = []) {
    const result = []

    const largeLength = unsortedNames.map(name => {
        const nameStat = {
            length: name.length,
            name,
        }
        return nameStat
    }).sort((prev, current) => current.length - prev.length)[0].length

    console.log(largeLength)

    sort(unsortedNames, largeLength)

    return result
}


santaSort(["Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"])