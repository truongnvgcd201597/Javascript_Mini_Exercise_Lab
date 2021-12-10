// using if...else
function formatSecondsV1(seconds) {
    if(seconds <= 0 || seconds > 60) return ' ';
      if(seconds < 10) return `${0}${seconds}`;
      if(seconds >= 10) return seconds.toString();
}
console.log(formatSecondsV1(9));
console.log(formatSecondsV1(10));


function formatSecondsV2(seconds) {
    if(seconds <= 0 || seconds > 60) return ' ';
    if(seconds < 10) {
     return `${0}${seconds.toString().slice(0, 1)}`;
    } else{
      return seconds.toString();
    }
}

  console.log(formatSecondsV2(9));
  console.log(formatSecondsV2(10));
  
  