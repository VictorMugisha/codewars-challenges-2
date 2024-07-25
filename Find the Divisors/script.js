function divisors(n) {
    let possibleDivisors = []
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            possibleDivisors.push(i)
        }
    }
    return possibleDivisors.length ? possibleDivisors : `${n} is prime`
}

console.log(divisors(12))
console.log(divisors(25))
console.log(divisors(13))