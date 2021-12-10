//Convert to numbers (parseInt and parseFloat)
console.log(Number(123));
console.log(Number('123'));
console.log(Number('abc'));

console.log(Number.parseFloat('1.5'));
console.log(Number.parseInt('123.5'));

console.log(Number(null));
console.log(Number(undefined));

//toFixed() toPrecision()
const n = 123.525;
n.toFixed(1); // 123.5
n.toFixed(2); // 124.45
n.toFixed(3); // 123.525
n.toFixed(4); // 123.5250

n.toPrecision(1) // 120
n.toPrecision(2) // 120
n.toPrecision(3) // 124
n.toPrecision(4) // 123.5
n.toPrecision(5) // 123.53
n.toPrecision(6) // 123.5250
n.toPrecision(7) // 123.52500


