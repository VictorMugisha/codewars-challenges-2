function sumStrings(a, b) {
    // If either string is empty, treat it as "0"
    if (a === "") a = "0";
    if (b === "") b = "0";

    // Ensure a is the longer string
    if (a.length < b.length) {
        [a, b] = [b, a];
    }

    // Reverse both strings to facilitate addition from least significant digit
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');

    let carry = 0;
    let result = [];

    // Add corresponding digits of both strings
    for (let i = 0; i < a.length; i++) {
        let digitA = parseInt(a[i], 10);
        let digitB = i < b.length ? parseInt(b[i], 10) : 0;
        let sum = digitA + digitB + carry;

        carry = Math.floor(sum / 10);
        result.push(sum % 10);
    }

    // If there is a carry left, add it to the result
    if (carry > 0) {
        result.push(carry);
    }

    // Reverse the result and convert it to a string
    result = result.reverse().join('');

    // Remove leading zeros and return the result
    return result.replace(/^0+/, '') || '0';
}

// Example usage
console.log(sumStrings('1', '2'));        // "3"
console.log(sumStrings('123', '456'));    // "579"
console.log(sumStrings('12345678901234567890', '98765432109876543210')); // "111111111011111111000"
console.log(sumStrings('', '12345'));     // "12345"
console.log(sumStrings('000123', '0456')); // "579"
