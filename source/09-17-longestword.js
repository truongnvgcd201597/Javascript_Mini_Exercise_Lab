//reduce 
//['a', 'ab', 'abc'] --> 'abc'
//str.length

function findLongestWord(wordList) {

    let longestWord = wordList[0];
   for (let i = 0; i < wordList.length; i++) {
       const currentWord = wordList[i];
     if(currentWord.length > longestWord.length) {
         longestWord = currentWord;
     }
   }
    return longestWord;
}
console.log(findLongestWord(['a', 'ab', 'abc']))


function findLongestWord(wordList) {

    let longestWord = wordList[0];
     wordList.array.forEach(currentWord => {
        if(currentWord.length > longestWord.length) {
            longestWord = currentWord;
        }
     });

     return longestWord;
}
console.log(findLongestWord(['a', 'ab', 'abc']))


