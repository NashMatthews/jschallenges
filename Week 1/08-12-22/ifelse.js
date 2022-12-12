// let hunger = "full";

// if (hunger == "hungry") {
//     console.log("Yes please, I'm starving!")
// } 
// else if (hunger == "full") {
//     console.log("No thanks, I'm stuffed!")
// }
// else{
//     console.log("Oh, go on then. Why not!?")
// }


// let music = "Tech Death";

// if (music == "Tech Death") {
//     console.log("Oh, how relaxing")
// }
// else if (music == "Punk") {
//     console.log("Where are my pogoing shoes?")
// }
// else{
//     console.log("Turn it down")
// }

// if (4 === "4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// if (4 != "4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// let age = 34

// if (age > 17) {
//     console.log("Yes, I can serve you")
// }
// else{
//     console.log("you aren't old enough")
// }

let food = "ice cream";
let hunger = "full";

if (hunger == "full" && food == "ice cream") {
    console.log("Yeah, boi!")
}
else if (hunger == "hungry" && food == "chips") {
    console.log("Nah, boi")
}
else if (hunger == "hungry" && food == "sprouts") {
    console.log("Eee ney")
}
else{
    console.log("Nah, I'm reet ta")
}

// Activity 3

let age = 34
let country = "UK"

if (age > 17 && country == "UK") {
    console.log("Yes, I can serve you")
}
else if (age > 17 && country == "UAE") {
    console.log("I can't serve you, or anyone")
}
else if (age > 15 && country == "Germany") {
    console.log("Drink up, kid!")
}
else{
    console.log("you aren't old enough")
}

// Activity 4 - OR

let day = "Thursday";

if (day == "Saturday" || day == "Sunday") {
    console.log("Yay it's the weekend!!")
}
else{
    console.log("Oh no, class again!")
}

// Activity 4 - SWITCH

let topping = "medical waste";

switch(topping) {
    case "cheese":
    case "pineapple":
        console.log("These are important ingredients for my pizza!")
        break
    case "ice cream":
    case "chocolate":
        console.log(`I don't mind having ${topping} on my pizza`)
        break
    case "peanuts":
    case "medical waste":
        console.log(`${topping} should not be on my pizza`)
}

// Activity 5 - SWITCH

let password = "hfdkfuf"
let length = password.length;
switch(length) {
    case (1):
    case (2):
    case (3):
    case (4):
    case (5):
    case (6):
    case (7):
        console.log("That password is too short!!")
        break
    default:
        console.log(password)
}

// Activity 5 - IF ELSE

password = "kjhdsfuhkjsd"
length = password.length;

if (length < 8) {
    console.log("That password is too short!!")
}
else{
    console.log(password)
}

// Activity 6

let num = Math.floor(Math.random() * 100)

if (num % 3 == 0){
    console.log("fizz")
}
else if (num % 5 == 0){
    console.log("buzz")
}
else{
    console.log(num)
}

// Activity 7

// let time = Math.floor(Math.random() * 12) + 1
// let placeOfWork = "The Rendering Plant"
// let townOfHome = "Wigan"

const whereAmI = (time, placeOfWork, townOfHome) => {   

if (time <= 5){
    console.log(`I'm at ${placeOfWork}.`)
}
else if (time == 6 || time == 7 || time == 8 || time == 9){
    console.log(`I'm in ${townOfHome}.`)
}
else{
    console.log(`I'm in bed.`)
}
}
whereAmI(Math.floor(Math.random() * 12) + 1, "The Rendering Plant", "Wigan")

// Activity 8

// declare string

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// declare blank array for indexes of vowels

let vowelIndexes = [];

// create a for loop to cycle through the string

for (let i = 0; i < string.length; i++){

// if the character is a vowel
// push the index of that character to vowelIndexes array

switch(string[i]) {
    case ("i"):
    case ("o"):
    case ("u"):
    case ("a"):
    case ("e"):
        vowelIndexes.push(i)
}
}

// call the last item in the array

console.log(vowelIndexes.pop())


// Activity 9

let word = "exfoliated";

let wordLength = word.length - 1;

if (word[0] == word[wordLength]){
    console.log(true)
}
else{
    console.log(false)
}


// Activity 10

let num1 = 3;
let num2 = 8;

let num3 = num1 + num2;

if (num3 % 2 == 0){
    console.log(num3)
}
else{
    console.log(num1 * num2)
}


// Activity 11

let numPal = 105262501;

// convert number to array

let numStr = Array.from(String(numPal));

// reverse the array

numStr.reverse()

// join the array to make a string. The .join parameter separates each item. 
// it will default to a comma, so use two empty inverted commas to return with no characters in between the numbers 

numStr = numStr.join('')

// compare the two

if (numPal == numStr){
    console.log("PALINDROOOOOOME!!!")
}
else{
    console.log("NO")
}