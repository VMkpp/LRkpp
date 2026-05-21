function recursiveSum(n) {
    if (n === 0) {
        return 0;
    }

    if (n > 0) {
        return n + recursiveSum(n - 1);
    }

    return n + recursiveSum(n + 1);
}

console.log(recursiveSum(5));   // 15
console.log(recursiveSum(-3));  // -6