let lives = 3

//While you have more than 0 lives, return "Well done! You're not dead." and decrement lives

while (lives > 0){
    console.log("Well done! You're not dead.")
    lives--
}

//When you don't have more than 0 lives, exit the loop and return "You're dead."

console.log("You're dead.")


let currentDiceRoll = "3";

while(currentDiceRoll != 1){

//return current dice roll if it doesn't equal 1

    console.log(currentDiceRoll)

//randomise current dice roll with "Math.random()" between 1 and 6 with " * 6) + 1"
//round currentDiceRoll to nearest integer with "Math.floor"

    currentDiceRoll = Math.floor(Math.random() * 6) + 1
}

// console.log(currentDiceRoll)


