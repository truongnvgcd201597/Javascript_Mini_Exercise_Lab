//CharAt: tìm phần tử index có trong chuỗi
const fullName = 'NV Truong';
console.log(fullName.charAt(0));
console.log(fullName.charAt(1));
console.log(fullName.charAt(3));
console.log(fullName.charAt(4));

//PadStart: thêm độ dài ký tự n lần phía đầu
////PadStart: thêm độ dài ký tự n lần phía cuối
const starSign = '9';
console.log(starSign.padStart(2, '0'));
const endSign = 'na';
console.log(endSign.padStart(6, '*'));

console.log(endSign.repeat(5));

//Xóa bỏ phần thừa
const khaLid = '  Hithere   ';
console.log(khaLid.trimStart());
console.log(khaLid.trim());
console.log(khaLid.trimEnd());



const starSign = '9';
console.log(starSign.padStart(2, '0'));

const endSign = '19';
console.log(endSign.padStart(8, '00:'));

`${zeroRepeat.repeat(2)}${seconds.toString().padStart(2, '0')}`