function getDivisorListV1(n) {
if(!Array.isArray(n)) return undefined;
if(n < 1) return undefined;

   let isEmty = []
   for(let i = 0; i < n; i++) {
       if(n % i === 0) isEmty.push(i)
   }
          return isEmty;
}
console.log(getDivisorListV1([24]))


function getDivisorListV2(n) {
    if(!Array.isArray(n)) return undefined;
    if(n < 1 && n > 100) return -1;

    const newArr = Array.from({length:n}, (x, y) => i + 1);
    const brandNewArr = newArr.filter((root, idx) => n % root === 0);
    return brandNewArr;
// [2, 4, 6]
}
console.log(getDivisorListV2([20]))

const student = {
    name: "Truong",
    age: 12
}
const{name, age} = student;