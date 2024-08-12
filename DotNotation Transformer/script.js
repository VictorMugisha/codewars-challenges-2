function transformer(notation = '', text = '') {
    const props = notation.split('.')
    const resultArray = []
    for (let prop of props) {
        resultArray.push("{", prop, ": ")
    }

    resultArray.push("'", text, "'")

    for (let _ of props) {
        resultArray.push("}")
    }

    console.log(resultArray.join(''))
}

transformer("kata.dot.notation", "final value")