function calcAvgOfAllEvenNumbers(numberList) {
   if(!Array.isArray(numberList) || numberList.length < 1) return 0;

  let newArr = [];
 numberList.forEach((number) => {
     number % 2 === 0 ? newArr.push : 0
 });
 if(numberList.length === 0) return 0;
 const result = newArr.reduce((sum, number) => sum + number, 0);
 return Math.round(result / newArr.length);
}

console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]))


function calcAvgOfAllEvenNumbers(numberList) {
  if(!Array.isArray(numberList) || numberList.length < 1) return 0;
  
  let newArr = [];
  for (let i = 0; i < numberList.length;i++) {
      if(numberList[i] % 2 === 0){
        newArr.push(numberList[i]);
  }
  return Math.round(newArr.reduce((sum, number) => sum + number / newArr.length));

console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]))





