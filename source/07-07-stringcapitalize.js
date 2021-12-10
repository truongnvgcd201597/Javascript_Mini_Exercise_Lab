function capitalize(str) {
    if(str === ' ') return ' ';
    const firstLetter = str[0].toUpperCase();
    const secondLetter = str.slice(1).toLowerCase();

    return `${firstLetter}${secondLetter}`;
}

console.log(capitalize('Easy FRontEnd'));