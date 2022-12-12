// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales Assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis", "gardening", "bungee jumping"]
// }

//now this...

// let day = "Monday";

// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Great, it's ${day}! Let's play ${person.hobbies[0]}!`)
// }
// else{
//     console.log(`Oh no! It's ${day}. I hate being a ${person.occupation}`)
// }


// and this...

const person = {
    firstName: "Sally",
    lastName: "Evans",
    age: 40,
    occupation: "Sales assistant",
    married: false,
    homeOwner: true,
    hobbies: ["tennis", "gardening", "bungee jumping"],
    marketingOp ( ) {
        if (this.homeOwner == false && this.age > 25){
            return "Send mortgage offer email."
        }
        else if (this.homeOwner == false && this.age < 25){
            return "Send summer holiday fun credit card offer."
        }
        else if (this.homeowner == true && this.age > 25){
            return "Pension investment offer."
        }
        else {
            return "Send sensible savings offer."
        }
    }
}

console.log(person.marketingOp())

