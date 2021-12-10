function isPrimeV1(n) {
   if(!Array.isArray(n)) return undefined;
      let flag = true;
   if (n < 2) flag = false;
   if(n == 2) flag = true;
   if(n % 2 == 0) flag = false;
      // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
      for (var i = 2; i < n-1; i++)
      {
          if (n % i == 0){
              flag = false;
              break;
          }
      }
   return flag;
   }
console.log(isPrimeV1([18]));