function getFullName(firstName, lastName) {
    if(firstName === ' ' || firstName === undefined) return lastName;
    if(lastName === ' ' || lastName === undefined) return firstName;
    
    let firstLetter = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}`;
    let lastLetter = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`;

    return `${firstLetter.trim()} ${lastLetter.trim()}`
}
console.log(getFullName('van', 'tRuong'));
console.log(getFullName('van', ''));
console.log(getFullName('', 'tRuong'));
console.log(getFullName('vAN', 'tRuoNg'));



