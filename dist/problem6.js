"use strict";
{
    function updateProfile(obj, property) {
        return Object.assign(Object.assign({}, obj), property);
    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));
    //
}
