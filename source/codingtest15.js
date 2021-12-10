function isEqual(obj1, obj2) {
   if(!obj1 || !obj2) return false;

   const keyGet = Object.keys(obj1);

    if(keyGet.length !== Object.keys(obj2).length) return false;

   for (let i = 0; i < keyGet.length; i++) {

       const keyCheck = keyGet[i];
       
       if(keyCheck in obj2 === false) return false;
       if(obj1[keyCheck] !== obj2[keyCheck]) return false;
   }
   return true;
}
console.log(isEqual({name: 'Bob'}, {name: 'Alice'}));
console.log(isEqual({name: 'Bob'}, {name: 'Bob'}));
console.log(isEqual({name: 'Bob'}, {name: 'Alice', age: 18}));
















function isEqual(obj1, obj2) {
    if(Object.keys(obj1).length === Object.keys(obj2).length) {
        return Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
    }
    return false;
} 

function isEqual(obj1, obj2) {
    if(Object.keys(obj1).length   !== Object.keys(obj2).length) return false;

    return Object.keys(obj1).every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key]);
} 
