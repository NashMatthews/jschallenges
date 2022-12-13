// // let total = 2;
// // let drinks = "Pepsi";
// // const coffeeShop = {
// //     // total: 2,
// //     branch: "Wigan",
// //     drinksWithPrices: [["Pepsi", 2], ["Rum", 4], ["Coffee", 3]],
// //     foodWithPrices: [["Cake", 2], ["Toast", 1], ["Ice cream", 3]],
// //     drinksOrdered( ) {
// //         if (drinks == this.drinksWithPrices[0[0]]){
// //             return total += this.drinksWithPrices[0[1]]
// //         }
// //         else if (drinks == this.drinksWithPrices[1[1]]){
// //             return total += this.drinksWithPrices[1[1]]
// //         }
// //         else if (drinks == this.drinksWithPrices[2[0]]){
// //             return total += this.drinksWithPrices[2[1]]
// //         }
// //     }
// // }
// // console.log(coffeeShop.drinksWithPrices[0[0]])

// let total = 0;
// let drinks = "Pepsi";
// const coffeeShop = {
//     // total: 2,
//     branch: "Wigan",
//     dWP: drinksWithPrices = {
//         Pepsi: 2,
//         Rum: 4,
//         Coffee: 3
//     },
//     fWP: foodWithPrices = {
//         Cake: 2,
//         Toast: 1,
//         IceCream: 3
//     },
//     drinksOrdered( ) {
//         if (drinks == "Pepsi"){
//             return total += this.dwp.drinksWithPrices.Pepsi[0]
//         }
//         else if (drinks == this.drinksWithPrices[1[1]]){
//             return total += this.drinksWithPrices[1[1]]
//         }
//         else if (drinks == this.drinksWithPrices[2[0]]){
//             return total += this.drinksWithPrices[2[1]]
//         }
//     }
// }
// console.log(total)

// let total = 0;
// let drinks = "Pepsi";
// let food = "Toast";
// const coffeeShop = {
//     branch: "Wigan",
//     dWP: [["Pepsi", 2], ["Coffee", 3], ["Rum", 4]],
//     fWP: [["Cake", 3], ["Toast", 1], ["Ice Cream", 2]],
//     drinksOrdered ( ) {
//         if (drinks == this.dWP[0[0]]){
//             return this.dWP[0[1]]
//         }
//         else if (drinks == this.dWP[1[0]]){
//             return "3"
//         }
//         else if (drinks == this.dWP[2[0]]){
//             return "4"
//         }
//         else{
//             return "error"
//         }
//     },
//     foodOrdered ( ) {
//         if (food == this.fWP[0[0]]){
//             return "3"
//         }
//         else if (food == this.fWP[1[0]]){
//             return "1"
//         }
//         else if (food == this.fWP[2[0]]){
//             return "2"
//         }
//     }
// }
// console.log(coffeeShop.drinksOrdered())
// console.log(coffeeShop.foodOrdered())

// console.log(`Your order is ${drinks} and ${food}. Your total will be (${coffeeShop.drinksOrdered()} + ${coffeeShop.foodOrdered()})`)

const coffeeShop = {
    branch: "Wigan",
    drinks: [
        "Coffee",
        "Rum",
        "Pepsi",
    ],

    drinksPrices: [
        3,
        4,
        2,
    ],

    food: [
        "Cake",
        "Toast",
        "Ice Cream",
    ],

    foodPrices: [
        2,
        1,
        3,
    ],

    drinksOrdered ( ) {
        return (this.drinksPrices[0] + this.drinksPrices[1])
    },

    foodOrdered ( ) {
        return (this.foodPrices[1] + this.foodPrices[2])
    },

    totalOrder ( ) {
        return (this.drinksOrdered() + this.foodOrdered())
    }

}

console.log(`Welcome to the ${coffeeShop.branch} branch of Captain Coffee! You have ordered ${coffeeShop.drinks[0]} and ${coffeeShop.drinks[1]}`)
console.log(`The total cost of your drinks is a very reasonable £${coffeeShop.drinksOrdered()}`)
console.log(`You have also ordered ${coffeeShop.food[1]} and ${coffeeShop.food[2]}!`)
console.log(`The total cost of your food is £${coffeeShop.foodOrdered()}. What a bargain!`)
console.log(`The total cost of your order, food and drinks is £${coffeeShop.totalOrder()}`)