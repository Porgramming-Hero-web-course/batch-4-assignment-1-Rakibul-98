{
    // Problem 2 : Remove duplicates from an array

    function removeDuplicates (numbers : number[]) : number[]{
        let uniqueNumbers : number[] = [];

        numbers.forEach(num=>{
            // check each number in the new array
            if(!uniqueNumbers.includes(num)){
                uniqueNumbers.push(num);
            }
        });
        return uniqueNumbers;
    }

    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);


    //
}