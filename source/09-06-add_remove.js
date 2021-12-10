//push(element(),...element(N))             Thêm cuối mảng
//pop()                                     Xóa cuối mảng
//shift()                                   Xóa đầu mảng
//unshift(element(),....element)            Thêm đầu mảng
//splice(start, deleteCount, item1,..itemN)    Thêm/ xóa giữa mảng


//Add new items at the end
const numberList = [1, 2, 3];
numberList.push(2);
numberList.push(5);
console.log(numberList);

//Remove items at the end
const numberList = [1, 2, 3];
numberList.pop();
console.log(numberList);

//Add new items at the beginning
const numberList = [1, 2, 3];
numberList.unshift(5);
numberList.unshift(9);
console.log(numberList);

//Remove items at the beggining
const numberList = [1, 2, 3];
numberList.shift();
console.log(numberList);

//Add/remove items at the middle of an array
const numberList = [1, 2, 3];
numberList.splice(1, 2, 3 ,5);
numberList.splice(0, 0, 3 ,5);
console.log(numberList);

