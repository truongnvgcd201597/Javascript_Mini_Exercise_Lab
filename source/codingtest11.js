function extractDomainV1(email) {
    if(email === '') return '-';
   let checkMail = email.split('@');
    return checkMail[1];
  }
console.log(extractDomainV1('maverickong96@gmail.com'));

function extractDomainV2(email) {
    if(email.includes('gmail'))  result =  (email.slice(email.indexOf('@')));
    if (email.includes('abc')) result = (email.slice(email.indexOf('@')));
    return result;
}
console.log(extractDomainV2('alice@abc.com'));
// console.log(extractDomainV2('bob@abc.com'));

// using split
function extractDomainV1(email) {
    if(email === '') return '';
   let checkMail = email.split('@');
    return checkMail[1];
  }


// using indexOf() and slice()

function extractDomainV2(email) {
    if(email.includes('gmail')){
      return (email.slice(email.indexOf('g')));
  } else{
    return (email.slice(email.indexOf('a')));
  }
}
 
 
