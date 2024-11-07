{
    // Problem 6 : Update property of an interface

    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    function updateProfile ( obj : Profile, property : Partial<Profile>) : Profile {
        return {...obj, ...property };
    }

    const myProfile : Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, {age: 26}));



    //
}