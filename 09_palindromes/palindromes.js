const palindromes = function (word) {

    const letters = Array.from(word).filter(char => char.toLowerCase() != char.toUpperCase()).map(letter => letter.toLowerCase());
    for(let i = 0; i < letters.length / 2; i++)
    {
        if((letters[i] !== letters[letters.length - i - 1])) return false;
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
