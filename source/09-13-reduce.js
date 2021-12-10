const numberList = [2, 4, 6];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
}
console.log(sum);

const result = [2, 4, 6].reduce((sum, number) => sum + number, 0);
console.log(result);


// reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue === undefined --> throw error
// - arr.length = 0 and initialValue !== undefined --> return initialValue

function reduce(arr, callbackFn, initialValue) {
    if(!Array.isArray(arr) || typeof callbackFn !== 'function') {
        throw new Error('Invalid paremeters');
    }

    //arr is an array
    if(arr.length === 0){
        if(initialValue === undefined) {
            throw new Error('Should have initialValue when arr is emty');
        }

        return initialValue;
    }

    const hasInitialValue = initialValue !== undefined;
    const startIndex = hasInitialValue ? 0 : 1;
    let accumalator = hasInitialValue ? initialValue : arr[0];
    for(let i = startIndex; i < arr.length; i++) {
        accumalator = callbackFn(accumalator, arr[i], i);
    }
    return accumalator;
}
function calcSum(prevSum, number) {
    return prevSum + number;
}

console.log(reduce([2, 4, 6], calcSum, 0));

reduce([2, 5, 7], function(prevSum, number){
    return prevSum + number;
},
0
);

reduce(reduce([2, 4, 6], (prevSum, number) => prevSum + number), 0);