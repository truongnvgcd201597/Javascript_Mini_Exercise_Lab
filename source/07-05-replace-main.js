const regexD = 'Easy Frontend Frontend';
//Thay thế từ đầu tiên
console.log(regexD.replace(' ', '-'));
console.log(regexD.replace('e', ''));
console.log(regexD.replace('Frontend', 'Backend'));
console.log(regexD.replace(/Frontend/g, 'Backend'));


