// Nếu là số dương thì ...
function checkNumber(n) {
    if (n > 0 ) {
        //code
    }
}
// Nếu là số dương chẳn thì ...
function checkNumber(n) {
    if (n > 0 && n % 2 === 0) {
        //code
    }
}
// Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkNumber(n) {
    if (n > 0 && n % 2 === 0 && n > 10) {
        //code
    }
}
// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
function checkNumber(n) {
    if (n > 0 && n % 2 === 0 & n % 5 === 0 & n > 10  ) {
        //code
    }
}
// Nếu là số dương chẳn hoặc số âm lẻ thì ...
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative =  n < 0 && n %2 !=== 0; 
function checkNumber(n) {
    if (isEvenPositive || isOddNegative) {
        //code
    }
}