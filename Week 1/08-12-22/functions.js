const holidayDestination = (country, month, activity) => {
    console.log(`Yay! I'm going on holiday to ${country} in ${month}. I can't wait to ${activity}.`)
}

holidayDestination("France", "June", "get wrecked")

const sayHello = (myName, drink) => {
    console.log(`Hi there, how are you? My name is ${myName}. Would you care for a ${drink}?`)
}

sayHello("Nash", "Mai Thai")


const inventory = (productCode, departmentName, quantity) => {
    console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
}

inventory(412345, "baked goods", 65)

const multiply = (num1, num2) => {
    return num1 * num2
}

console.log(multiply(2,5))