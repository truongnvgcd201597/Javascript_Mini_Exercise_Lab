function isPerfectNumber(n) {
if(n < 1 && n > 100) return undefined;
let sum = 0;
for (let i = 0; i < n.length; i++) {
    if(n % i)  sum += n;
    return sum === n;
}
}
console.log(isPerfectNumber([20]))