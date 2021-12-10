//find(callbackFn)               Tìm phần tử đầu tiên thỏa điều kiện
//findIndex(callbackFn)          Tìm vị trí của phần tử đầu tiên thỏa điều kiện

[1, 2, 3].find(x => x % 2 === 0); //2 
[2, 1, 3].findIndex(x => x % 2 === 0); // 0

['easy', 'frontend'].find(x => x.length > 4); // 'frontend'
['easy', 'frontend'].findIndex(x => x.length > 4); //1


//v1(lính canh)
function findFirstEven(numberList) {
    if(!Array.isArray(numberList)) return undefined;

    let firstEven; //undefined

  for(let i = 0; i < numberList.length; i++) {
      const number = numberList[i];
    if(number % 2 === 0) {
        firstEven = number;
        break;  
    }
  }

  return firstEven;
}
console.log(findFirstEven([1, 2, 3, 4, 5]));

//v2
function findFirstEven(numberList) {
    if(!Array.isArray(numberList)) return undefined;

    let firstEven; //undefined

  for(let i = 0; i < numberList.length; i++) {
      const number = numberList[i];
    if(number % 2 === 0) {
        return number; 
    }
}
 return undefined;
}
console.log(findFirstEven([1, 2, 3, 4, 5]));

//v3 
function findFirstEven(numberList, callbackFN) {
    if(!Array.isArray(numberList)) return undefined;

    for(let i = 0; i < numberList.length; i++) {
        const number = numberList.length;
        if(callbackFN(number, i)) {
            return number;
        }
    }
            return undefined
}

 function isEven(number) {
     return number % 2 === 0;
 }
 console.log(findFirstEven([1, 2 ,3 ,5], isEven))

 //Inline fuction, anonymous function
 findFirstEven([1, 2, 3 ,5]), function (number) {
     return number % 2 === 0;
 })
);


 //Arrow function
console.log(
    findFirstEven([1, 2, 3, 5]), (number) => {
        return number % 2 === 0;
    })
);

//Arrow function shorthand
console.log(findFirstEven([1, 2, 3, 5]), (number) => number % 2 === 0);