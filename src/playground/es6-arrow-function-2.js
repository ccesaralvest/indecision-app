const user = {
    name: "Caio",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLive() {
        return this.cities.map((citys) => this.name + " Has lived in " + citys);
    } 
};
console.log(user.printPlacesLive());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((numberOfArray) => numberOfArray * this.multiplyBy);
    }
}
console.log(multiplier.multiply());