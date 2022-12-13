// Activity 1

const hello = "Hello Code Nation"

function hello5(){
    for (let i = 0; i <= 5; i++){
        if(i < 5){
            console.log(hello);
        }
    }
}
hello5();


// Activity 2

let numbers = [1, 4, 87, 12, 54];

const num3 = numbers.map(myFunction)

function myFunction(num) {
    return num * 3;
}

console.log(num3)