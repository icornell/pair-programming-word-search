const wordSearch = (letters, word) => { 
    if(letters.length < 1 || word.length < 1) {
        return false; 
    } 
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = letters[0].map((col, index) => 
        letters.map(row => row[index])
        );
    const verticalMap = verticalJoin.map((ls) => ls.join(''));
    for (l of horizontalJoin) {
            if (l.includes(word)) {
                console.log(`the word ${word} is present and horizontal`);
                return true;
            } else {
        for (l of verticalMap) {
            if (l.includes(word)) {
                console.log(`the word ${word} is present and vertical`);
                return true;
            }
        }    
    }
}
console.log(`the word ${word} is not present`);
return false; 
};

module.exports = wordSearch
