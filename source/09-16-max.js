//write function to find max
// for...i
//forEach
//reduce

function findMax(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

    //lính canh
    let max = numberList[0];
    for (let i = 0; i < numberList.length; i++) {
        if(numberList[i] > max) {
            max = numberList[i];
        }
    }

    return max;
}
console.log(findMax([2, 5, 6, 7, 12]))


function findMaxEach(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
   
    let max = numberList[0];
    numberList.forEach(number => {
        if(number > max) {
            max = number;
        }
    });
    
    return max;
}
console.log(findMaxEach([2, 5, 6, 7, 12]))
