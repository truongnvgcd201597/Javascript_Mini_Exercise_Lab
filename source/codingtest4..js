function getMaxDigit(n) {
    if( n < 0 || n >= 1000) return -1;
  
    const firstNum = n % 10;
    const secondNum = Math.trunc((n % 100) / 10);
    const thirdNum = Math.trunc(n / 100);
  
     let maxDigit = firstNum;
  
     if(maxDigit <= secondNum) maxDigit = secondNum;
     if(maxDigit <= thirdNum)  maxDigit = thirdNum;
     return maxDigit;
  }
  console.log(getMaxDigit(3));
  console.log(getMaxDigit(46));
  console.log(getMaxDigit(539));
  console.log(getMaxDigit(37));

