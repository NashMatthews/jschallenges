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