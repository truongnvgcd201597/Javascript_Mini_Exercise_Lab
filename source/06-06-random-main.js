function randomNumber(n) {
    if(n <= 0) return -1;

    const random = Math.random() * n;
    return Math.round(random);
};


function randomNumberInRange(a, b) {
    if (a >= b) return -1;
    
    const random = Math.random() * (b - a);
    return Math.round(random) + a;
    }
    console.log(randomNumberInRange(10, 99));
    console.log(randomNumberInRange(10, 99));
    console.log(randomNumberInRange(10, 99));
    console.log(randomNumberInRange(100, 999));
    console.log(randomNumberInRange(100, 999));
    console.log(randomNumberInRange(100, 999));
    console.log(randomNumberInRange(1000, 9999));
    console.log(randomNumberInRange(1000, 9999));
    console.log(randomNumberInRange(1000, 9999));
    console.log(randomNumberInRange(1000, 9999));
