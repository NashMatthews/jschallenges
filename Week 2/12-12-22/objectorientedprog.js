class Pet {
    constructor(name, age, type, breed, colour, time) {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    feedPet (time) {
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`
    }
    petColour (colour) {
        this.colour = colour;
        return `Colour for ${this.name} updated to ${this.colour}`
    }
    petBreed (breed) {
        this.breed = breed;
        return `Breed for ${this.name} updated to ${this.breed}`
    }
}
class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime) {
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds (time) {
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds} for ${this.name}`
    }
}

const gelert = new Pet("Gelert", 10, "Dog", "Cross-Collie", "Black & White", "08:00");
const bonnie = new PetMeds("Bonnie", 15, "Cat", "Girl Cat", "Black", "10:00", "19:00");
const clyde = new Pet("Clyde", 14, "Cat", "Boy Cat", "Ginger & White", "11:00");

console.log(gelert.feedPet("15:00"));
console.log(bonnie.feedPet("17:00"));
console.log(gelert.petColour("Black, Brown and White"));
console.log(clyde.petBreed("Tabby Mix"));
console.log(bonnie.giveMeds("08:00"))