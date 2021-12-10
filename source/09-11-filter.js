const numberList = [2, 4, 7, 8];
console.log(numberList.filter(x => x % 2 === 0));

const wordList = ['easy', 'frontend', 'easier'];
console.log(wordList.filter(x => x.length > 5));

function filter(arr, callbackFn) {
    if(!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(callbackFn(element, i)) {
            newArray.push(element);
        }
    }

    return newArray;
}
console.log(filter([1, 2, 3, 4, 5], (x) => x > 3));