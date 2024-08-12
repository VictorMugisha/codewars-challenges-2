
function doubleEveryOther(array) {
    const doubledArray = array.map((element, index) => {
        if (index % 2 !== 0) {
            return element * 2
        }
        return element
    })
    return doubledArray
}

const testOne = [1,2,3,4,5,6]
console.log(doubleEveryOther(testOne))