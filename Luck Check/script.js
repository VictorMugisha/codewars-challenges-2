function luckCheck(ticket) {
    if (typeof ticket !== 'string' || !/^\d+$/.test(ticket) || ticket.length === 0) {
        throw new Error('Invalid input');
    }

    const len = ticket.length;
    const mid = Math.floor(len / 2);

    let leftSum = 0;
    let rightSum = 0;

    // Sum the digits for the left half
    for (let i = 0; i < mid; i++) {
        leftSum += parseInt(ticket[i], 10);
    }

    // Sum the digits for the right half
    for (let i = len - 1; i >= len - mid; i--) {
        rightSum += parseInt(ticket[i], 10);
    }

    // Compare the sums
    return leftSum === rightSum;
}

// Example usage
console.log(luckCheck("003111")); // true
console.log(luckCheck("813372")); // true
console.log(luckCheck("17935"));  // true
console.log(luckCheck("56328116")); // true
console.log(luckCheck("1234"));   // false
console.log(luckCheck("12"));     // true
console.log(luckCheck(""));       // Error
console.log(luckCheck("abcd"));   // Error
