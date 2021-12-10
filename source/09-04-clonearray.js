//Clone array 
//Issue: Array cũng là tham chiểu, nên cần thận khi dùng phép gán
const numberList = [1, 2, 3];
const anotherList = numberList;

anotherList[0] = 4;
console.log(numberList);

//Solution: Clone array trước khi thực hiện thay đổi
const numberList = [1, 2, 3],
const anotherList = [...numberList];

anotherList[0] = 4;
console.log(numberList);