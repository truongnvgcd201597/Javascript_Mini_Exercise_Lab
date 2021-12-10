const numberList = [2, 5, 3, 1];
console.log(numberList.sort());

function compareFn(a, b) {
    return a - b;
}
console.log([2, 1, 3].sort(compareFn));

