let favHolDest = ["Copenhagen", "Koh Tao", "Tolmin", "Brussels", "Wigan", "Hell", "Planet Hollywood", "Scotland", "City of the Dead"];
// let favCountries = ["Denmark", "Thailand", "Slovenia"];
// for (let i = 0; i < favHolDest.length; i+2){
//     console.log(favHolDest[i])
// }

// for (let i = 0; i <= 10; i++){
// //     console.log(i += 3)
// // }

// Activity 2

let evenNumbers  = []

for (let n = 0; n < 20; n++){
    if (n % 2 == 0) {
        (evenNumbers.unshift(n))
    }
}
console.log(`The even numbers between 0 and 20, in reverse order, are; ${evenNumbers}`)

// Activity 3

let oddNumbers = []

for (let n = 0; n < 30; n++){
    if (n % 2 == 1){
        (oddNumbers.push(n))
    }
}
console.log(`The odd numbers between 0 and 30 are; ${oddNumbers}`)