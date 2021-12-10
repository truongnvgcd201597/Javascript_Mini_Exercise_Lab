const numberList = [1, 3, 5, 7];
console.log(numberList.map(x => x * 2));

const wordList = ['easy', 'frontend'];
console.log(wordList.map(x => `haha${x}`));

function map(arr, mappingFn) {
    //mapping function should be a function
    //arr should be an array
    if(!Array.isArray(arr) || typeof mappingFn !== 'function') return undefined;

    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const newElement = mappingFn(element);
        newArray.push(newElement);
    }

    return newArray;
}
console.log(map([1, 2, 3], (x) => x + 1))