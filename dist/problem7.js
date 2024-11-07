"use strict";
{
    // Problem 7 : Calculate carAge from a Car class with class method
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
    //
}
