const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`);
}

const greet = (time, fn) => {
    if(time < 1200){
        fn("Morning");
    }else if (time >= 1200 && time < 1800){
        fn("Afternoon");
    }else{
        fn("Evening");
    }
}

greet(1100, whichGreeting);


const add = (num1) => {
    return (num2) => {
        return num1 / num2 * num1 + num1 - num2;
    }
}
console.log(add(2)(4));