function transformer(notation = "", text = "") {
  const props = notation.split(".");
  const resultArray = [];
  for (let prop of props) {
    resultArray.push("{", prop, ": ");
  }

  resultArray.push("'", text, "'");

  for (let _ of props) {
    resultArray.push("}");
  }

  console.log(resultArray.join(""));
}

// transformer("kata.dot.notation", "final value")

function transformDotNotation(text = "", finalValue = "") {
    const properties = text.split('.')
    const finalObject = []
    for (let property of properties) {
        finalObject.push(`{ ${property}: `)
    }
    finalObject.push(finalValue)
    for (const _ of properties) {
        finalObject.push(" }")
    }

    console.log(finalObject.join(''))
}
transformDotNotation("kata.dot.notation", "This Kata")
