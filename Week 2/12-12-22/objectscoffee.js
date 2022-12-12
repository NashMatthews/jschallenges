let total = 0;
let drinks = "Pepsi";
const coffeeShop = {
    branch: "Wigan",
    drinksWithPrices: [["Pepsi", 2], ["Rum", 4], ["Coffee", 3]],
    foodWithPrices: [["Cake", 2], ["Toast", 1], ["Ice cream", 3]],
    drinksOrdered( ) {
        if (this.drinks == this.drinksWithPrices[0[0]]){
            return total += this.drinksWithPrices[0[1]]
        }
        else if (this.drinks == this.drinksWithPrices[1[1]]){
            return total += this.drinksWithPrices[1[1]]
        }
        else if (this.drinks == this.drinksWithPrices[2[0]]){
            return total += this.drinksWithPrices[2[1]]
        }
    }
}
console.log(coffeeShop.drinksOrdered())