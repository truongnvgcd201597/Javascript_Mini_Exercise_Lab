//. Create an object student with name is Easy Frontend and age is 18.
const student = {
    name: 'Truong',
    age: 18,
};
console.log(student);

//Check if an object is empty (means have no keys)
// { } -> No keys  -> length of  key list is 0
function isEmty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmty({}));
console.log(isEmty({name: 'NVT'}));

//Get average mark of an object
//calcvgMark({ mark: 10, english: 8})

function getAvgMark(mark) {
    //avg = sum / length

    const length = Object.keys(mark).length;

    let sum  = 0;
    for (const key in mark) {
        const value = mark[key];
        sum += value;
    }
        return (sum / length).toFixed(1);
        }
console.log(getAvgMark({ math: 10, english: 8}));

