{
    // Problem 1 : sum of the numbers of an array

    function sumArray (numbers : number[]) : number {
        let sum : number = 0;
        numbers.forEach(num =>{
            sum = sum + num;
        })
        return sum;
    }

    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);

    //
}