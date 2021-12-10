//every(callbackFn)                    Kiểm tra tất cả phần tử thỏa điều kiện
//some(callbackFN)                     Kiểm tra có một phần tử thỏa điều kiện
//indexOf(searchElement)               Tìm vị trí đầu tiên của phần tử searchElement
//lastIndexOf(searchElement)           Tìm vị trí cuối cùng của phần tử searchElement
//includes(searchElement)              Kiểm tra có chứa phần tử searchElement

//check if all number í even
[1, 2, 4].every((x) => x % 2 === 0); // false
[2, 4, 6].every((x) => x % 2 === 0); // true

//check if exist number is even
[1, 2, 4].some((x) => x % 2 === 0); // true
[1, 3, 5].some((x) => x % 2 === 0); // false

[1, 1, 1].indexOf(1);
[1, 1, 1].lastIndexOf(1);

['easy', 'frontend', 'easy'].indexOf('easy'); // 0
['easy', 'frontend', 'easy'].lastIndexOf('easy'); // 2

//Every
function checkIfAllEven(numberList) {
   if(!Array.isArray(numberList)) return false;

   for (let i = 0; i < numberList.length; i++) {
       if(numberList[i] % 2 !== 0) return false;
   }

   return true;
}
console.log(checkIfAllEven([3, 5, 7]));
console.log(checkIfAllEven([2, 1, 3]));
console.log(checkIfAllEven([2, 4, 6]));

//Some
function checkIfAllEven(numberList) {
    if(!Array.isArray(numberList)) return false;
      let isValid = false;
        for (let i = 0; i < numberList.length; i++) {
            if(numberList[i] % 2 === 0) return true;
        }
 
    return isValid;
 }
 console.log(checkIfAllEven([3, 5, 7]));
 console.log(checkIfAllEven([1, 2, 3]));
 console.log(checkIfAllEven([2, 4, 6]));


//IndexOf
 function checkIfAllEven(numberList) {
   return (numberList[0] % 2 === 0);
 }
 console.log(checkIfAllEven([3, 5, 7]));
 console.log(checkIfAllEven([1, 2, 3]));
 console.log(checkIfAllEven([2, 4, 6]));

 //IndexOf
 function checkIfAllEven(numberList) {
    return (numberList[numberList.length -1] % 2 === 0);
  }
  console.log(checkIfAllEven([3, 5, 2]));
  console.log(checkIfAllEven([1, 2, 3]));
  console.log(checkIfAllEven([2, 4, 5]));

  //Includes
    //IndexOf
    function checkIfAllEven(numberList) {
        for (let i = 0; i < numberList.length; i++) {
            return (numberList[i] === 9)
        }
    }
    console.log(checkIfAllEven([3, 5, 7]));
    console.log(checkIfAllEven([1, 9, 3]));
    console.log(checkIfAllEven([2, 4, 6]));


///v1
function findFirstEven(numberList) {
  if(!Array.isArray(numberList)) return undefined;
  let firstEven;
  for (let i = 0; i < numberList.length; i++ ) {
      const number = numberList[i];
      if(number % 2 === 0) {
          firstEven = number;
          break;
      }
  }
 
  return firstEven;
}

//v2
function findFirstEven(numberList) {
  if(!Array.isArray(numberList)) return undefined;
  let firstEven;
  for (let i = 0; i < numberList.length; i++ ) {
      const number = numberList[i];
      if(number % 2 === 0) {
         return number;
      }
  }
 
  return undefined;
}

