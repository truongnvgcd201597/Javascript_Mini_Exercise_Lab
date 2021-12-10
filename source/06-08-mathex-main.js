// 1. Write a function to calculate the area of a rectangle
 function calcOfRetangle(a, b) {
     if (a <= 0 && b <= 0) return -1;
     return a * b;
 }
 console.log(calcOfRetangle(4, 2));

 // 2.Write a function to calculate perimeter of a rectangle
 function calcOfPerimeterRec(c, d) {
     if(c <= 0 && d <= 0) return -1;
         return (c + d) * 2;
 }
 console.log(calcOfPerimeterRec(4, 4));

 // 3.Write a function to calculate the area of a circle
  function calcAreaCircle(r) {
      if(r <= 0) return -1;
      return r*r * Math.round(Math.PI);
  }
   console.log(calcAreaCircle(3, 2));