//Greater than / Less than
1 < 2 // true
1 > 2 // false

//Greater, Less than or equal
1 >= 2; //false
0 <= 2; //true

//Equal / Not equal
1 == 2; //false
1 != 2; // true


// String
'a' > 'b'; //false
'aa' <= 'b'; //true
'abc' > 'abd'; // fasle

'a' > 'A' //true
'A' > 'g' //true

'easy' == 'easy'; //true
'easy frontend' != 'easy'; //true
'easy frontend' > 'easy'; //true


//Boolean

true > false; //true
true == false; //false
true != false; // true



//Khac kieu du lieu

123 == '123'; //true
123 == '0123'; //true

false == 0; //true
true == 1; //true

'0' == false; // true
'2' > true; // false
'123' >= 100; // true

//Strict quality
111 === '111'; //false
0 === false; //false
'' === 0; //false

1 === 1; //true
'abc' === 'abc'; //true

//Null / Undefined

null == undefined; //true
null === undefined; //false

null > 0; //false
null == 0; //false
null >= 0 //true