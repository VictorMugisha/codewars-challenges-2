function partitions(n) {
    // Create a DP array initialized with 0's, but dp[0] is 1
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;  // Base case

    // Fill the dp table
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            dp[j] += dp[j - i];
        }
    }

    // The number of partitions of n is stored in dp[n]
    return dp[n];
}

// Example usage
console.log(partitions(5));   // Output: 7
console.log(partitions(100)); // Output: 190569291
