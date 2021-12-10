// khai báo mảng rỗng
const numberLiist = [];
const numberLast = [1, 2, 3]; // a list of numbers
const wordList = ['Easy', 'Frontend']; // a list of strings
const flagList = [true, false, false]; // a list of boolean
// a list of students
const studentList = [
 { 
     id: 1, 
     name: 'Van A'
},
{ id: 2,
name: 'Thi B' 
},
{ id: 3, 
name: 'Van C'}
]
console.log(studentList.name);

// a list of list
const board = [
    [1, 2],
    ['a', 'b', 'c'],
    [true, false, false, false]
   ]
   // a list of mixed data type
   const mixedList = [
    1,
    2,
    'word',
    true,
    null,
    undefined,
    { id: 1, name: 'Easy' },
    [1, 2, 3]
   ];

const numberList = [3, 5, 7]; // recommended
console.log(numberList[0]); // 3
console.log(numberList[1]); // 5
console.log(numberList[2]); // 7
console.log(numberList.length); // 3
console.log(numberList[numberList.length - 1]); // 7 (the last element)

