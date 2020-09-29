function findLongestWord(string = " ") {
    const stringSplit = string.split(' ');
    let longestWord = "";

    for (const word of stringSplit) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));















// function findLongestWord(str) {
//     return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
// };

// console.log(findLongestWord('There is the longest word in a string!'));

// function findLongestWord(string) {
//     return string.split(' ').reduce((a, b) => (b.lenght > a.lenght) ? b : a)

// }