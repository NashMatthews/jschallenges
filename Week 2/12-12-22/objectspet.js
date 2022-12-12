// Activity 1/3

const pet = {
    petName: "Gelert",
    typeOfPet: "Dog",
    age: "10",
    colour: "Dark Brown/black and White",
    petFeatures: ["Liked chewing socks", "friendly", "stinky breath", "loving", "dead"],
    eating: true,
    drinking: false,
    eat ( ) {
        if (this.eating == true){
            return (`${this.petName} is eating`)
        }
        else{
            return (`${this.petName} is not eating`)
        }
    },
    drink ( ) {
        if (this.drinking == true){
        return (`${this.petName} is drinking`)
        }
        else{
            return (`${this.petName} is not drinkin`)
        }
    }
}

pet.colour = "Purple";

console.log(`When I was young we had a ${pet.typeOfPet} called ${pet.petName}. She was ${pet.colour}, and she lived until she was ${pet.age}`)
console.log(pet.eat())
console.log(pet.drink())
