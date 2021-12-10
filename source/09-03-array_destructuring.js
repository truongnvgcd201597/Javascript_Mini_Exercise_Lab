//Oject destructuring
const student = {
    id:1,
    name: 'Easy Frontend',
}

const student = student.id;
const name =student.name;

const {id, name} = student;
console.log(id);
console.log(name);

//old way
const numberList = [1, 2, 3];
const first = numberList[0];
const second = numberList[1];
const third = numberList[2];

//similar but new way
const [first, second, third] = numberList;

//or even direct way
const [first, second, third] = [1, 2, 3, 4, 5];

//rest operator
const [first, second, third, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);

