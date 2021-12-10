function minMaxSum(arr){
    arr.sort((a, b) => a - b)
    return [arr.reduce ((a, b) => a + b, 0) - arr[arr.length - 1],arr.reduce((a, b) => a + b, 0) - arr[0]]
}