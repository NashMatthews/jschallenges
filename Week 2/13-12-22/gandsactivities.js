class Rental {
    constructor(storeName, address, phone, films) {
    this.storeName = storeName;
    this.address = address;
    this.phone = phone;
    this.films = films;
}
set filmList (films) {
    const array = films.push(', ');
    "Mandy" = array[0];
    "The Disaster Artist" = array[1];
    "They Live" = array[2];
    "Fury Road" = array[3];
}
}
const Test = new Rental("Nashty's", "Manchester", "555-6475", films)
console.log(Test)