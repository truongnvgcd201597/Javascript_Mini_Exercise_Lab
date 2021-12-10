  function isSecureUrlV1(url) {
    if(url.startsWith('http:') || url.startsWith('ws:')) {
          return false;
       } else{ 
          return url.startsWith('https:') || url.startsWith('wss:');
        }
  }
console.log(isSecureUrlV1("https://nvtruong.vn"));
console.log(isSecureUrlV1("http://nvtruong.vn"));
console.log(isSecureUrlV1("wss://nvtruong.vn"));
console.log(isSecureUrlV1("ws://nvtruong.vn"));


function isSecureUrlV2(url) {
  if(url.indexOf('http:') || url.indexOf('ws:')) {
    return false;
  }else{
    return url.startsWith('https:') || url.startsWith('wss:');
  }
}
console.log(isSecureUrlV2("https:nvtruong.vn"));
console.log(isSecureUrlV2("http:nvtruong.vn"));

 
 
  
  
