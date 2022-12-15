class Pet {
    constructor(firstName, lastName, age, type, breed, colour, time) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.time = time;
    }
    get petInfo () {
        return `${this.firstName} is a ${this.type}, ${this.age} year(s) old`;
    }
    set fullName (firstName) {
        const array = firstName.split(' ');
        this.firstName = array[0];
        this.lastName = array[1];
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.firstName}`
    }
}

const Gelert = new Pet("Gelert", "", 10, "Dog", "Cross-Collie", "Black, Brown & White", "08:00")
console.log(Gelert);
Gelert.fullName = "Gelert Nash"
console.log(Gelert);
console.log(Gelert.fullName)