{
    // Problem 3 : count repeated word in a sentence

    function countWordOccurrences (sentence : string, word : string) : number {
        let count : number = 0;
        let words : string[] = sentence.toLowerCase().split(' ');

        // lowercase to make case insensitive
        words.forEach( item =>{
            if(item === word.toLocaleLowerCase()){
                count++;
            }
        });
        return count;
    }

    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);




    //
}