//GOOD
if(condition) dosomethin();

//GOOD
if(condition) {
    dosomethin();
    dosomethinelse();
}

//OK
if(condition) {
    dosomethin();
}else{
    dosomethinelse();
}

//BAD
if(condition) {
    dosomethin();
}else if(anotherCase){
    dosomethinelse();
}else{
    dosomethinfinally();
}

//Avoid to use nested if
if(condition) {
  if(condition2) {
      dosomethin();
  } else {
      dosomethinElse();
  }
}
