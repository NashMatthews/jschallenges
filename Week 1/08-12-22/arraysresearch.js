let favBands = ["Propagandhi", "Dr. Nowt", "Thank You Scientist", "Closure in Moscow", "Clowns", "A Wilhelm Scream"];

console.log(favBands.shift())
console.log(favBands)

console.log(favBands.slice(1,4))
console.log(favBands)

console.log(favBands.splice(1,4))
console.log(favBands)

console.log(favBands.unshift("Propagandhi", "Thank You Scientist", "Closure in Moscow", "Clowns", "A Wilhelm Scream"))
console.log(favBands)

let fruits = new Map();
fruits.set("bananas", 8000000000);
fruits.set("moreBananas", 260);
fruits.set("aCoupleMoreBananas", 3);

console.log(fruits)
console.log(fruits.get("moreBananas"))
console.log(fruits.delete("aCoupleMoreBananas"))
console.log(fruits)