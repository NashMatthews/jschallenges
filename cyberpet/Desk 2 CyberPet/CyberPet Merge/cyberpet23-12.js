// $$¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬$$
//=||.@@@@@@...@@...@@@@@..@@....@@.@@....@@...@@...@@@@@..@@@@@......@@@@@@.@@@@@..@@@@@@.@@@@@@.@@....@@.@@@@@...@@@@..||=
//=||.@@@@@@..@@@@..@@..@@.@@@..@@@.@@....@@..@@@@..@@..@@.@@..@@.....@@@@@@.@@..@@...@@...@@.....@@@...@@.@@..@@.@@..@@.||=
//=||.@@.....@@..@@.@@..@@.@@.@@.@@..@@..@@..@@..@@.@@..@@.@@..@@.....@@.....@@..@@...@@...@@.....@@@@..@@.@@..@@.@@.....||=
//=||.@@@@...@@@@@@.@@@@@..@@....@@...@@@@...@@@@@@.@@@@@..@@..@@.....@@@@...@@@@@....@@...@@@@...@@.@@.@@.@@..@@..@@@@..||=
//=||.@@.....@@..@@.@@.@@..@@....@@....@@....@@..@@.@@.@@..@@..@@.....@@.....@@.@@....@@...@@.....@@..@@@@.@@..@@.....@@.||=
//=||.@@.....@@..@@.@@..@@.@@....@@....@@....@@..@@.@@..@@.@@..@@.....@@.....@@..@@...@@...@@.....@@...@@@.@@..@@.@@..@@.||=
//=||.@@.....@@..@@.@@..@@.@@....@@....@@....@@..@@.@@..@@.@@@@@......@@.....@@..@@.@@@@@@.@@@@@@.@@....@@.@@@@@...@@@@..||=
// $$¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬$$

/* UPDATE!!!

Kept the game loop from starting as soon as pet name is submitted

Hunger/Fatigue/Happiness/Wool/Shoe levels aren't increasing/decreasing

When horse button is clicked and game is started it still runs the sheep game loop

*/

// link to HTML elements

const placeholder = document.getElementById("placeholder");
const stats = document.getElementById("stats");
const input = document.getElementById("input");
const submit = document.getElementById("name");
const sheep = document.getElementById("sheep");
const horse = document.getElementById("horse");
const start = document.getElementById("start");
const list = document.getElementById("list");
const feed = document.getElementById("feed");
const play = document.getElementById("play");
const sleep = document.getElementById("sleep");
const shear = document.getElementById("shear");
const change = document.getElementById("change");

// declare initial BasePet class

class BasePet {
    constructor(name, animal, hunger, fatigue, happiness, stillAlive) {
      this.name = name;
      this.animal = animal
      this.hunger = hunger;
      this.fatigue = fatigue;
      this.happiness = happiness;
      this.stillAlive = stillAlive;
    }
};

// set the extended class constructor for Sheep class

class Sheep extends BasePet {
    constructor(name, animal, hunger, fatigue, happiness, stillAlive, woolLength) {
      super(name, animal, hunger, fatigue, happiness, stillAlive);
      this.woolLength = woolLength;
    }
    checkIfAliveSheep() {
      if (this.woolLength >= 100 || this.hunger >= 100 || this.fatigue >= 100 || this.happiness <= 0){
        this.stillAlive = false;
      }
    }
  }
    
  const petSheep = new Sheep("", "Sheep", 50, 50, 50, true, 50);

// set the extended class constructor for Horse class

class Horse extends BasePet {
    constructor(name, animal, hunger, fatigue, happiness, horseShoeHealth) {
      super(name, animal, hunger, fatigue, happiness);
      this.horseShoeHealth = horseShoeHealth;
    }

    checkIfAliveHorse () {
      if (this.horseShoeHealth <= 0 || this.hunger >= 100 || this.fatigue >= 100 || this.happiness <= 0){
        this.stillAlive = false;
      }
    }
  }

  const petHorse = new Horse("", "Horse", 50, 50, 50, true, 50);



// declare necessary variables for later in the code

let blahblah;
let intervalTimerIndividual;

// hide all animal selection and action buttons

sheep.style.visibility = "hidden";
horse.style.visibility = "hidden";
start.style.visibility = "hidden";
feed.style.visibility = "hidden";
sleep.style.visibility = "hidden";
play.style.visibility = "hidden";
shear.style.visibility = "hidden";
change.style.visibility = "hidden";

// Only cycle through the script up to this point until the 'Submit' button is pressed????????????????

// Choose name input

submit.addEventListener("click", () =>{
    petName = input.value;
    placeholder.textContent = `Your pet's name is ${petName}! What a fantastic name! Is it a sheep or a horse? Those are your options`;
    submit.style.display = "none";
    input.style.display = "none";
    sheep.style.visibility = "visible";
    horse.style.visibility = "visible";
    new BasePet(petName, "", 50, 50, 50, true);
});

// Only cycle through the script up to this point until an animal selecter button is clicked??????????????????

/* If you click the 'Sheep' button, the animal buttons disappear
  a message appears
  a new 'Sheep' class is declared using the class extender
*/

sheep.addEventListener("click", () =>{
    placeholder.textContent = `${petName} the sheep!? Baaa-utiful!`;
    start.style.visibility = "visible";
    feed.style.visibility = "visible";
    sleep.style.visibility = "visible";
    play.style.visibility = "visible";
    shear.style.visibility = "visible";
    sheep.style.visibility = "hidden";
    horse.style.visibility = "hidden";
    
    window.blahblah = "Sheep";
});

/* If you click the 'Horse' button, the animal buttons disappear
  a message appears
  a new 'Horse' class is declared using the class extender
*/

horse.addEventListener("click", () =>{
    placeholder.textContent = `Is ${petName} a sheep? Neigh, it's a horse!!!`;
    start.style.visibility = "visible";
    feed.style.visibility = "visible";
    sleep.style.visibility = "visible";
    play.style.visibility = "visible";
    change.style.visibility = "visible";
    sheep.style.visibility = "hidden";
    horse.style.visibility = "hidden";
    
    window.blahblah = "Horse"
});

/* "Start Game" button: Rather than the game starting when the name is input, or when the animal is selected,
  it will start when this button is clicked.
  A different function should execute depending on which animal has been selected
*/



/* Game loop for sheep begins
  cheacks if sheep is still alive
  if it is, it increase hunger, fatigue and wool length levels by random amounts each second
  decreases happiness amount
  if sheep is dead, return message

  This should also display the hunger, fatigue, happiness and wool length levels onscreen
*/

const gameLoopSheep = () => {
  if (petSheep.stillAlive == true){

    stats.textContent = `${petName}'s hunger level is: ${petSheep.hunger}
                        ${petName}'s fatigue level is: ${petSheep.fatigue}
                        ${petName}'s happiness level is: ${petSheep.happiness}
                        ${petName}'s wool length is: ${petSheep.woolLength}`

    // console.log(`${petName}'s hunger level is: ${petSheep.hunger}`);
    // console.log(`${petName}'s fatigue level is: ${petSheep.fatigue}`);
    // console.log(`${petName}'s happiness level is: ${petSheep.happiness}`);
    // console.log(`${petName}'s wool length is: ${petSheep.woolLength} units`);

    petSheep.hunger += 5
    // petSheep.hunger += Math.floor(Math.random()*10)+1
    petSheep.fatigue += 5
    petSheep.happiness -= 5
    petSheep.woolLength += 5
    // petSheep.fatigue += Math.floor(Math.random()*10)+1
    // petSheep.happiness -= Math.floor(Math.random()*10)+1
    // petSheep.woolLength += Math.floor(Math.random()*10)+1

    petSheep.checkIfAliveSheep()
  }
  else if (petSheep.stillAlive == false){
    console.log(`GAME OVER! You idiot! ${petName} is dead and it's all your fault.`)
    window.alert(`GAME OVER! You idiot! ${petName} is dead and it's all your fault.`)
    clearInterval(intervalTimerIndividual)
  }
}

/* Game loop for horse begins
  cheacks if horse is still alive
  if it is, it increase hunger and fatigue levels by random amounts each second
  decreases happiness and horse shoe health amount
  if horse is dead, return message

  This should also display the hunger, fatigue, happiness and horse shoe health levels onscreen
*/

const gameLoopHorse = () => {
  if (petHorse.stillAlive == true){

    stats.textContent = `${petName}'s hunger level is: ${petHorse.hunger}
                        ${petName}'s fatigue level is: ${petHorse.fatigue}
                        ${petName}'s happiness level is: ${petHorse.happiness}
                        ${petName}'s horse shoe health level is: ${petHorse.horseShoeHealth}`

      // console.log(`${petName}'s hunger level is: ${petHorse.hunger}`);
      // console.log(`${petName}'s fatigue level is: ${petHorse.fatigue}`);
      // console.log(`${petName}'s happiness level is: ${petHorse.happiness}`);
      // console.log(`${petName}'s horse shoe health level is: ${petHorse.horseShoeHealth}`);
  
      petHorse.hunger += 5
      petHorse.fatigue += 5
      petHorse.happiness -= 5
      petHorse.horseShoeHealth -= 5
      // petHorse.hunger += Math.floor(Math.random()*10)+1
      // petHorse.fatigue += Math.floor(Math.random()*10)+1
      // petHorse.happiness -= Math.floor(Math.random()*10)+1
      // petHorse.horseShoeHealth -= Math.floor(Math.random()*10)+1

      petHorse.checkIfAliveHorse()
  }
  else if (petHorse.stillAlive == false){
    console.log("GAME OVER! Pet horse is dead!")
    // window.alert("GAME OVER! Your pet is dead!")
    clearInterval(intervalTimerIndividual)
  }
}

start.addEventListener("click", () =>{

  if (blahblah == "Sheep"){
    gameLoopSheep();    
  }
  
  else if (blahblah == "Horse"){
    gameLoopHorse();
  }
})

// Running the gameloop for you chosen pet (do we need an if/else statement? both do the same thing)

if (blahblah = "Sheep"){
    intervalTimerIndividual = setInterval(gameLoopSheep(), 1000);
  }
else {
    intervalTimerIndividual = setInterval(gameLoopHorse(), 2000);
  }

/* Action buttons for the game
  feed and sleep buttons affect different classes (Sheep, Horse) depending on the animal selected (if/else statement)
  if 'Feed' or 'Sleep' buttons are clicked, hunger or fatigue decrease by random amount between five and ten
  if 'Play' or 'Change Horse Shoes' buttons are clicked, happiness or horse shoe health increase by random amount between five and ten
  when each button is clicked it is disabled for a random amount of time, up to five seconds
*/

feed.addEventListener('click', () => {
  if (blahblah = "Sheep"){
    petSheep.hunger -= 30;
    // Sheep.hunger -= Math.floor(Math.random()*10)+5;
  }
  else {
    petHorse.hunger -= 30;
    // Horse.hunger -= Math.floor(Math.random()*10)+5;
  };

  const reloadTime = 3;
  // const reloadTime = Math.floor(Math.random() * 5) + 1;


  feed.disabled = true;

  setTimeout(() => {
    feed.disabled = false;
  }, reloadTime * 1000);
});


play.addEventListener('click', () => {
    if (blahblah = "Sheep"){
      petSheep.happiness += 20
      // petSheep.happiness += Math.floor(Math.random()*10)+5;
    }
    else {
      petHorse.happiness += 20
      // petHorse.happiness += Math.floor(Math.random()*10)+5;
    };
  
    const reloadTime = 2
    // const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    play.disabled = true;
  
    setTimeout(() => {
      play.disabled = false;
    }, reloadTime * 1000);
  });


sleep.addEventListener('click', () => {
    if (blahblah = "Sheep"){
      petSheep.fatigue -= 2;
      // petSheep.fatigue -= Math.floor(Math.random()*10)+5;
    }
    else {
      petHorse.fatigue -= 2;
      // petHorse.fatigue -= Math.floor(Math.random()*10)+5;
    };
  
    const reloadTime = 2;
    // const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    sleep.disabled = true;
  
    setTimeout(() => {
      sleep.disabled = false;
    }, reloadTime * 1000);
  });


shear.addEventListener('click', () => {
    petSheep.woolLength -= 3;
    // petSheep.woolLength -= Math.floor(Math.random() * 10) + 5;
  
    const reloadTime = 3;
    // const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    shear.disabled = true;
  
    setTimeout(() => {
      shear.disabled = false;
    }, reloadTime * 1000);
});


  change.addEventListener('click', () => {
    petHorse.horseShoeHealth += 3;
    // petHorse.horseShoeHealth += Math.floor(Math.random()*10)+5;

    const reloadTime = 3;
    // const reloadTime = Math.floor(Math.random() * 5) + 1;
  
    change.disabled = true;
  
    setTimeout(() => {
      change.disabled = false;
    }, reloadTime * 1000);
  });