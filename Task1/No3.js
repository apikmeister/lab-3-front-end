function reverseNumber(n) {
    var reversed = 0;
    while (n !== 0) {
        reversed = reversed * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return reversed;
}

console.log(reverseNumber(23456));
console.log(reverseNumber(7654321));
console.log(reverseNumber(2468));
