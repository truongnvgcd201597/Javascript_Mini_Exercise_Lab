//Duyệt phần tử của array
 //Before ES5: for...i
 //ES5: forEach
 //ES6: for...of

 //before ES5
 const numberList = [4, 5, 6];
 for(let i = 0; i < numberList.length; i++) {
     const number = numberList[i];
     console.log(number);
 }

 //ES5 forEach

 const numberList = [2, 4, 6];
 numberList.forEach(x => console.log(x));

 //ES6 for---of

 const numberList = [2, 4, 6];
for (const number of numberList) {
    console.log(number);
}