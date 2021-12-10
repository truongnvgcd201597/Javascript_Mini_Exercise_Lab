//Khai báo Object
//Key - value
//value: Number, String, Boolean, Object, Array, Function,...

const student = {
    id: 1,
    name: 'Van A',
    name: 'Van B', // same key come later will take precedence
    isHero: true,
    'key has space': 'super', // key with spaces should be wrapped in quotes
    sayHi() {
    console.log('Hello!');
    }
}

//Lấy value của key.
//Dùng dot operator để truy cập cặp key của object
// Dùng square brackets để truy cập dynamic key của object, kể cả có space.

const student = {
    name: 'NVT',
    age: 18,
    isHandsome: true,
    'top class' : 1
}
// console.log(student.name);
// console.log(student.age);
// console.log(student.isHandsome);
// console.log(student['top class']);

const key = 'top class';
console.log(student.age);
console.log(student['isHandsome']);

//Thêm key mới cho Object

const student = {
    name: 'NVTruong',
    age: 19,
    isHandsome: true,
}

student.name = 'NVHe'// Update value of a key
student.id = 1;
student['mark'] = 10;
console.log(student);

//Xóa 1 keys
const student = {
    id: 1,
    name: 'Van A',
    isHero: true,
    }

//Remove "name" key;
delete student.id;
delete student['name'];
console.log(student);

