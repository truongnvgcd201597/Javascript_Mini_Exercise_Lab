//Lấy kí tự Index
const fullFill = 'Hi there';
//v1
console.log(fullFill.charAt(fullFill.length - 1));
// //v2
console.log('Hi there'[2]);
//Nhược điểm v2: Không gán được
console.log(fullFill.replace('i', ''));



//Nối chuỗi
let line1 = 'Imprecise';
let line2 = 'Calculation';

console.log(line1 + ' ' + line2);
console.log(line1.concat(' ', line2));
console.log(`${line1} ${line2}`) //Highly Recommend

//Convert hoa thường
let halo = 'rbebgb';
console.log(halo.toLowerCase());
console.log(halo.toUpperCase());

//Tìm chuỗi con 
   const findID = 'Learn to success';
   console.log(findID.indexOf('s'));
   console.log(findID.indexOf('s', 10));
   console.log(findID.lastIndexOf('s'));

//Kiểm tra chứa chuỗi con 
//Kiểm tra từ đầu
   const dotDagle = 'Co lam thi co an';
   console.log(dotDagle.startsWith('lam'));
   console.log(dotDagle.startsWith('Co'));
   console.log(dotDagle.startsWith('co'));

//Kiểm tra mọi thứ
console.log(dotDagle.includes('co'));
console.log(dotDagle.includes('co'));
console.log(dotDagle.includes('co'));

//Kiểm tra từ cuối
console.log(dotDagle.endsWith('an'));
console.log(dotDagle.endsWith('co'));
console.log(dotDagle.endsWith('An'));




