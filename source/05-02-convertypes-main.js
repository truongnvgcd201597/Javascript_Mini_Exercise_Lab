//Type coersion
const a = 1 + '2' // the operator will auto convert '12' before coding the addtion
const b = 2 - '1' // the operator will auto convert '1' before coding the addtion

const message = 'JS so easy';
//this message will be convert to boolean value
if(message) {
    console.log('really');
}


//Explitit conversation
const error = 'Somethin wrong'
const hasError = Boolean(error);//convert error to boolean

const mark = 9;
const markstring = mark.toString(); 

const type = '1';
const typeNumberic = type.parse.Int(type);
