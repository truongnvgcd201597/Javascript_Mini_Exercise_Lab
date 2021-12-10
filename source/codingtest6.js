function isSymmetricNumber(n) {
    if(n < 0) return -1;
    
    const firstNum = n % 10;
    const secondNum = Math.trunc((n % 100) / 10);
    const thirdNum = Math.trunc(n / 100);
    if(firstNum === thirdNum) {
        return n;
    } else{
        return false;
    }
}
isSymmetricNumber(323);