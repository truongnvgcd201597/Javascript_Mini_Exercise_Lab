// every v1
export function checkIfAllEvenV1(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    let isValid = true;
    for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 !== 0) {
    isValid = false;
    break;
}
}
return isValid;
}
console.log(checkIfAllEvenV1([2, 1, 3]));
console.log(checkIfAllEvenV1([2, 4, 6]));

// every v2
export function checkIfAllEvenV2(numberList) {
    if (!Array.isArray(numberList)) return false;
    for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
    }
    return true;
   }
   console.log(checkIfAllEvenV2([2, 1, 3]));
   console.log(checkIfAllEvenV2([2, 4, 6]));
   