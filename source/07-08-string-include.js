//Check if a string contains an email address with @gmail.com or not.
// indexOf
// lastIndexOf
// includes

function hasEmail(str) {
    // return str.include('@gmail.com');
    return str.indexOf('@gmail.com') >= 0;
    // retrun str.lastindexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc abc@gmail.com def'));
