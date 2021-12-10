
function createArrayInRangeV1(a, b) {
  const newArray = [];
  if(a > b || a <= -100 || b >= 100) return undefined;
    for(let i = a; i <= b - 1; i++) {
      newArray.push(i);
 }
 return newArray;
}
 console.log(createArrayInRangeV1(1, 10));
 
function createArrayInRangeV2(a, b) {
    if(a > b || a <= -100 || b >= 100) return undefined;
     return Array.from({length: (b - a) + 1}, (item, index) => {
        return index + a;
});
}
console.log(createArrayInRangeV2(1, 5));

function range(start, end) {
  var ans = [];
  for (let i = start; i <= end; i++) {
      ans.push(i);
  }
  return ans;
}
console.log(range(5, 10))
