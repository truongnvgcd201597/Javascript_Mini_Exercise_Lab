// Write a function to check if a number a positive even number
// If yes. return true, Otherwise return false

//flag
function isPositiveEvenNumer(n) {
 let isValid; //underfined

 //checking ....
 if( n > 0 && n % 2 === 0) {
     isValid = true;
 }else{
     isValid = false;
 }
 return isValid;
}

// v2 
function isPositiveEvenNumer(n) {
    let isValid = false;
    
    //checking
    if( n > 0 && n % 2 === 0) {
        return true;
    }
    return isValid;
}

//v3 
function isPositiveEvenNumer(n) {
    if( n > 0 && n % 2 === 0) {
        return true;
    }
}

//v4 
function isPositiveEvenNumer(n) {
    return n > 0 && n % 2 === 0; 
}
console.log(isPositiveEvenNumer(5));