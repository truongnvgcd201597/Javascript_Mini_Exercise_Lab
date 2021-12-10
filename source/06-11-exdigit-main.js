// 1. Get the ones of a number having 3 digits
function extractTheOnes(n) {
    if(n.toString().length !== 3) return -1;
    return n % 10;
}
console.log(extractTheOnes(105));

// 2. Get the tens of a number having 3 digits
function extractTheTwo(n) {
if(n.toString().length !== 3) return -1;
   return Math.trunc((n % 100) / 10);
}
console.log(extractTheTwo(245));


// 3. Get the hundreds of a number having 3 digits
function extractTheThree(n) {
    if(n.toString().length !== 3) return -1;
    return Math.trunc(n / 100);
}
console.log(extractTheThree(456));