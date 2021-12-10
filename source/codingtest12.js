function findSecret(code) {
    return code.split('').filter(item => item !== item.toUpperCase()).join('');
console.log(findSecret('SUPPERheroCODE'));
console.log(findSecret(''))
console.log(findSecret('eaABFHUEYSJJSKJSHend'));
