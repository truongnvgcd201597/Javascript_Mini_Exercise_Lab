//Đặt tên cho object
const student = {
    name: 'Easy Frontend',
    const: 'haha',
    function: 'it works',
    true: 'work too',
   }
   //Với tên biến / tên function thì không được dùng reserved keywords.
   //Còn với tên key của object thì thoải mái, kể cả reserved keywords, nhưng không khuyến khích sử dụng


//Property value shorthand
 const name = 'Easy Frontend';
 const age = 19;

// const student = {
//     name: name,
//     age: age
// }
  const student = {
      name,
      age,
  }
 console.log(student);


//Object destructuring
const student = {
    name: 'NVTruong',
    age: 18
}
//old way
const name = student.name;
const age = student.age;

//New way usign object  destructuring
const {name, age} = student;

//Kiểm tra key có trong object không?
let student = {
    name: 'Easy Frontend',
    age: 18,
   }
   

'name' in student;
'age' in student;
'foop' in student; 

console.log('name' in student);

//Clone object
const student = {
    name: 'Easy Frontend',
    age: 18,
}
  const moreProps = {
      isHero: true,
      gender: 'male',
  }

const clonedStudent = Object.assign({}, student, moreProps)
console.log(clonedStudent);

//Deep clone object
const student = {
    name: 'Easy Frontend',
    age: 18,
    mark: {
    math: 10,
    english: 7,
    }
   }
   const clonedStudent = {
    ...student,
   }
   clonedStudent.mark.math = 1;
   console.log(student.mark.math); // 1

   // solution, clone nested levels if any
const clonedStudent = {
    ...student,
    mark: {
    ...student.mark,
    }
   }
   clonedStudent.mark.math = 1;
   console.log(student.mark.math); // 10 works now


