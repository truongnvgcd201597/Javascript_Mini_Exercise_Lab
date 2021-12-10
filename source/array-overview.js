//Khai báo mảng
//Đặt tên dùng suffix là List. Eg: numberList thay vì numbers
//Mỗi phần tử có thể có một kiểu dữ liệu khác nhau

//1.Khai báo mảng trống
 const numberList = [];

 const numberList = [1, 2, 3]; //a list of numbers
 const wordList = ['Easy', 'Frontend'] // a list of strings
 const flagList = [true, false, true]; // a list of boolean

 //a list of student 
 const studentList = [
     {id:1, name: 'NV A'},
     {id:2, name: 'NV B'},
     {id:3, name: 'NV B'},
 ]

 //a list of list 
 const board = [
     [1, 2],
     [true, false, true],
     [a, b, c]
 ]

 // a list of mixed data type
 const mixedList = [
     1,
     2,
     'NVT',
     undefined,
     null,
     {id:1, name: 'Truong'},
     [1, 2, 3],
 ];


 //2.Truy xuât phần tử của mảng
//Dùng square bracket để truy xuất phần tử tại vị trí index
//Index của mảng bắt đầu từ số 0
//Nếu length của Array bằng 3, thì index lớn nhất của chúng bằng length - 1 = 2

const numberList = [3, 5, 7]; //Recommend

numberList[0]; //3
numberList[1]; //5
numberList[2]; //7

numberList.length;
console.log(numberList.length - 1); // 7 (the last element)

//Mảng 2 chiều
const board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

board[0];
board[1];
board[2];

board[0][1];
board[2][1];