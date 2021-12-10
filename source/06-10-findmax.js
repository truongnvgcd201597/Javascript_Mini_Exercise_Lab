//Convert hours to seconds
function convertHtoS(hour) {
    if( hour <= 0) return -1;
    const SECOND_PER_HOUR = 3600;
    return hour * SECOND_PER_HOUR;
}
console.log(convertHtoS(4));

// 2. Given 3 numbers, find max
 function findMax(a, b, c) {
     let maxnum = a;

     if(b > maxnum) maxnum = b;
     if(c > maxnum) maxnum = c;

     return maxnum;
 }
 console.log(findMax(3, 4, 5));