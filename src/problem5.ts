{
    // Problem 5 : generic function to get property value

    type Person = {
        name: string;
        age: number;
    }

    function getProperty <X, Y extends keyof X> (obj : X, key : Y) : X[Y] {
        return obj[key];
    }

    const person : Person ={
        name: "Alice", 
        age: 30,
    }

    console.log(getProperty(person, "name"));


    //
}