function removeVowel(str) {
    if(str === ' ') return ' ';
    
    const vol1 = str.indexOf('u');
    const vol2 = str.indexOf('e');
    const vol3 = str.indexOf('o');
    const vol4 = str.indexOf('a');
    const vol5 = str.indexOf('i');

    str = str.replace(str[vol1], '');
    str = str.replace(str[vol2], '');
    str = str.replace(str[vol3], '');
    str = str.replace(str[vol4], '');
    str = str.replace(str[vol5], '');

    return str = str.replace('', ' ');
}
console.log(removeVowel('hello motherfucker'));