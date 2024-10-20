
// const a = {
//     value: 2,
//     [Symbol.toPrimitive](hint) {
//         if (hint === 'number') {
//             return this.value
//         }
//         return this.value++
//     }
// }
// console.log(a == 3)
// console.log(a == 2)


const a = {
    value: 2,
    [Symbol.toPrimitive](type) {
        if (type === 'number') {
            return this.value
        }
        return this.value++
    }
}
console.log(`a == 2: ${a == 2}`)
console.log(`a == 3: ${a == 3}`)
console.log(`a == 2 && a == 3: ${a == 2 && a == 3}`);