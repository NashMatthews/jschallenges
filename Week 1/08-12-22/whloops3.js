// define age as a random number

let age = Math.floor(Math.random() * 20);

// while age is less than 18

while(age < 18){
    
// log "You're a child!"
// assign a new random number to age

    console.log("You're a child!")
    age = Math.floor(Math.random() * 100)
}

//if age is 18 or more then return "You're an adult!"

console.log("You're an adult!")