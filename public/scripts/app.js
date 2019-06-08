"use strict";

var user = {
    name: "Caio",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLive: function printPlacesLive() {
        var _this = this;

        return this.cities.map(function (citys) {
            return _this.name + " Has lived in " + citys;
        });
    }
};
console.log(user.printPlacesLive());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (numberOfArray) {
            return numberOfArray * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
