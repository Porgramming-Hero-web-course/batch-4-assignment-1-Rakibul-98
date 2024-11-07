"use strict";
{
    // Problem 3 : count repeated word in a sentence
    function countWordOccurrences(sentence, word) {
        let count = 0;
        let words = sentence.toLowerCase().split(' ');
        // lowercase to make case insensitive
        words.forEach(item => {
            if (item === word.toLocaleLowerCase()) {
                count++;
            }
        });
        return count;
    }
    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);
    //
}
