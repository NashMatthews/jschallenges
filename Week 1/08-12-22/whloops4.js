// Activity 4 - Generate 6 random numbers

// Set numbers to an empty array

let numbers = [];

// While the length of the numbers array is less than 6

while(numbers.length < 6){

// Generate a new random number and assign it to randomNumber

    randomNumber = Math.floor(Math.random() * 1000000)

// Log the random number

    console.log(randomNumber)

// Push the random number to the numbers array.
// The array won't be displayed but the loop will stop once there are 6 numbers in it

    numbers.push(randomNumber)
}