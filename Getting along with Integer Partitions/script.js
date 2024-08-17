function part(n) {
    // Helper function to find all partitions of n
    function getPartitions(n, max = n) {
        if (n === 0) return [[]];
        let result = [];
        for (let i = Math.min(max, n); i >= 1; i--) {
            let subPartitions = getPartitions(n - i, i);
            subPartitions.forEach(sub => result.push([i, ...sub]));
        }
        return result;
    }

    // Calculate partitions
    let partitions = getPartitions(n);

    // Calculate products of each partition
    let products = partitions.map(partition =>
        partition.reduce((product, num) => product * num, 1)
    );

    // Remove duplicates and sort
    let uniqueProducts = Array.from(new Set(products)).sort((a, b) => a - b);

    // Calculate Range
    let range = uniqueProducts[uniqueProducts.length - 1] - uniqueProducts[0];

    // Calculate Average
    let sum = uniqueProducts.reduce((acc, num) => acc + num, 0);
    let average = (sum / uniqueProducts.length).toFixed(2);

    // Calculate Median
    let median;
    let len = uniqueProducts.length;
    if (len % 2 === 0) {
        median = ((uniqueProducts[len / 2 - 1] + uniqueProducts[len / 2]) / 2).toFixed(2);
    } else {
        median = uniqueProducts[Math.floor(len / 2)].toFixed(2);
    }

    // Return result in the required format
    return `Range: ${range} Average: ${average} Median: ${median}`;
}

// Example usage
console.log(part(5));  // Output: "Range: 5 Average: 3.50 Median: 3.50"
console.log(part(8));  // Output: "Range: 17 Average: 8.29 Median: 7.00"
