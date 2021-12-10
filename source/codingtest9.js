// please try to use these constants in your code

// function formatTime(seconds) {
//     if(seconds < 0 || seconds >= 86400) return 0; 
//     if(seconds < 10) return seconds.toString().padStart(8, '00:');
//     if(10 < seconds < 60) return seconds.toString().padStart(8, '00:');
//     if(60 <= seconds < 3600) {
//         seconds = seconds % 60;
//         minutes = Math.trunc(seconds / 60);
//         return `${'00:'}${minutes.toString.padStart(2, '0')}${minutes.toString.padStart(2, '0')}`;
//     }
// console.log(formatTime(8));
// console.log(formatTime(50));
// console.log(formatTime(61));

function formatSeconds(seconds) {
    var date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}
console.log(formatSeconds(60));





    










