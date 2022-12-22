// establish variables for current time (these won't all necessarily be used. We can delete the unused ones later.)

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth();
let cYear = currentDate.getFullYear();
let cHour = currentDate.getHours();
let cMins = currentDate.getMinutes();
let cSecs = currentDate.getSeconds();
let cTime = cHour + ":" + cMins; + ":" + cSecs;
let time = cDay + "-" + cMonth + "-" + cYear + " ~ " + cTime;

// links to HTML

const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("name");
const list = document.getElementById("list");
const sheep = document.getElementById("sheep");
const horse = document.getElementById("horse");
const feed = document.getElementById("feed");
const sleep = document.getElementById("sleep");
const play = document.getElementById("play");
const shear = document.getElementById("shear");
const change = document.getElementById("change")

/* set class and constructor for pet.
I made the 'b' upper case because I think that's what you do with classes but I can't remember why or if that's true??? */

class BasePet {
    constructor(name, animal, hunger, fatigue, happiness) {
      this.name = name;
      this.animal = animal;
      this.hunger = hunger;
      this.fatigue = fatigue;
      this.happiness = happiness;
      this.stillAlive = true;
    }
}

// set initial visibility for feed/water buttons so they don't show on the initial screen (possibly a more elegant way to do this???)

sheep.style.visibility = "hidden";
horse.style.visibility = "hidden";
feed.style.visibility = "hidden";
sleep.style.visibility = "hidden";
play.style.visibility = "hidden";
shear.style.visibility = "hidden";
change.style.visibility = "hidden";

/* function for clicking submit on the pet's name. "window" makes the name entered a global variable so it can be used in later functions
    the text box and submit button dissapear and the feed/water buttons become visible
    apply the pet name to the BasePet constructor. set hunger and fatique to '0' and happiness to '100'
*/

submit.addEventListener("click", () =>{
    window.petName = input.value;
    placeholder.textContent = `Your pet's name is ${petName}! What a fantastic name! Is it a sheep or a horse? Those are your options`;
    submit.style.display = "none";
    input.style.display = "none";
    sheep.style.visibility = "visible";
    horse.style.visibility = "visible";
    window.pet = new BasePet(petName, "", 0, 0, 100);
})

/* buttons to select whether it's a sheep or a horse
    when each is selected, hide the buttons and reveal feed/water buttons
    apply 'Sheep' or 'Horse' to 'animal' in the constructor
*/

sheep.addEventListener("click", () =>{
    placeholder.textContent = `${petName} the sheep!? Baaa-utiful!`;
    feed.style.visibility = "visible";
    sleep.style.visibility = "visible";
    play.style.visibility = "visible";
    shear.style.visibility = "visible";
    sheep.style.visibility = "hidden";
    horse.style.visibility = "hidden";
    window.BasePet(petName, "Sheep", 0, 0, 100);
})

horse.addEventListener("click", () =>{
    placeholder.textContent = `Is ${petName} a sheep? Neigh, it's a horse!!!`;
    feed.style.visibility = "visible";
    sleep.style.visibility = "visible";
    play.style.visibility = "visible";
    change.style.visibility = "visible";
    sheep.style.visibility = "hidden";
    horse.style.visibility = "hidden";
    window.BasePet(petName, "Horse", 0, 0, 100);
})

// limit the number of clicks on a button within a certain amount of time (experimental)

// function links to the HTML - if HTML button is clicked, execute this function
function feedTime(btn) {
    
    // disable button
        btn.disabled = true;

    // enable button after 3 seconds
        setTimeout(function() { btn.disabled = false;
        }, 3000);
    }

// functions for the action buttons, complete with hilarious messages

feed.addEventListener("click", () =>{
    placeholder.textContent = `Yummers! ${petName} is proper stuffed now!`;
    this.hunger -= 10;
})

// limit clicks on 'play' button
function playTime(btn) {
    btn.disabled = true;
    setTimeout(function() {btn.disabled = false;
    }, 5000);
}
play.addEventListener("click", () =>{
    placeholder.textContent = `What fun! ${petName} soooo happy!`;
})

// limit clicks on 'sleep' button
function sleepTime(btn) {
    btn.disabled = true;
    setTimeout(function() {btn.disabled = false;
    }, 7000);
}
sleep.addEventListener("click", () =>{
    placeholder.textContent = `${petName} has slept and risen with the dawn, rested and prepared to take on another day.`;
})

// limit clicks on 'shear' button
function shearTime(btn) {
    btn.disabled = true;
    setTimeout(function() {btn.disabled = false;
    }, 9000);
}
shear.addEventListener("click", () =>{
    placeholder.textContent = `${petName} is feeling dapper as fuck in their new haircut!`
})

// limit checks on 'change' button
function changeTime(btn) {
    btn.disabled = true;
    setTimeout(function() {btn.disabled = false;
    }, 9000);
}
change.addEventListener("click", () =>{
    placeholder.textContent = `Braying happily, ${petName} trots off on their shiny new shoes!`
})