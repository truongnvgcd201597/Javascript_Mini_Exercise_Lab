function FirstFactorial(num) { 
	let factorial = 1;
	for(let i = 2; i < num; i--){
	  factorial *= i;
	}
   // code goes here  
   return factorial; 
 }
	
 // keep this function call here 
 console.log(FirstFactorial(4));