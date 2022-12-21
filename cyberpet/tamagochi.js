// declare variables to establish the current time - year, month, date, hour, minutes

let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth();
let cYear = currentDate.getFullYear();
let cHour = currentDate.getHours();
let cMins = currentDate.getMinutes();
let cTime = cHour + ":" + cMins;
let time = cDay + "-" + cMonth + "-" + cYear + " ~ " + cTime;

// create a class, Pet, with a constructor (hp, name, age, type, colour, lastFedHour, meds, watered, affection)

class Pet {
    constructor(hp, name, age, type, colour, lastFedHour, lastFedMins, lastWateredHour, lastWateredMins, meds, affection) {
        this.hp = hp;
        this.name = name;
        this.age = age;
        this.type = type;
        this.colour = colour;
        this.lastFedHour = lastFedHour;
        this.lastFedMins = lastFedMins;
        this.lastWateredHour = lastWateredHour;
        this.lastWateredMins = lastWateredMins;
        this.meds = meds;
        this.affection = affection;
    }

// add a method to update the last time the pet was fed

// do the same for watered

    feedPet (lastFedHour, lastFedMins) {
        this.lastFedHour = lastFedHour;
        this.lastFedMins = lastFedMins;
        return `Yummers! ${this.name} is proper stuffed now! Last feeding time updated to ${(this.lastFedHour) + ":" + (this.lastFedMins)}`
    }
    waterPet (lastWateredHour, lastWateredMins) {
        this.lastWateredHour = lastWateredHour;
        this.lastWateredMins = lastWateredMins;
        return `Aaahh! ${this.name} is feeling reet quenched! Last watering time updated to ${(this.lastWateredHour) + ":" + (this.lastWateredMins)}`
    }

// add a method to deduct 10 health points if the pet is not fed in time
// +++ also return that the pet needs to be fed within the hour or it will lose more health points

// do the same for meds and watered

    noFeedPet (hp) {
        this.hp = hp;
        return `Where's the food!? ${this.name} is bloody starving! Their last feeding time was ${(this.lastFedHour) + ":" + (this.lastFedMins)}! Their HP has fallen to ${this.hp}. ${this.name} will need to be fed by ${(cHour + 1) + ":" + (cMins)} or they will lose 10 more HP!!!`
    }
    noWaterPet (hp) {
        this.hp = hp;
        return `*Gasp!* So thirsty! ${this.name} needs some water, quick! Their last drink was at ${(this.lastWateredHour) + ":" + (this.lastWateredMins)}! Their HP has fallen to ${this.hp}. ${this.name} better get some more water by ${(cHour + 1) + ":" + (cMins)} or they will lose 5 more HP!!!`
    }
}

// create a variable to fill in the Pet constructor. Set hp (health points) to 100 as a starting point. This will decrease if the pet is not fed.

const plooples = new Pet(20, "Plooples", 1, "Cat-Dog", 10, 10);

// console.log to update the time the pet was last fed and return a message. (hour, minute)

plooples.feedPet(2, 15);
plooples.waterPet(4, 36);

// if statement to reduce HP by 10 if it's been over 6 hours since feeding

if (((cHour - plooples.lastFedHour) > 6) || ((cHour - plooples.lastFedHour) == 6) && ((cMins - plooples.lastFedMins) > 0)){
    plooples.hp -= 10
}

/* if/else statement to check how long it's been since the last feeding.
If it's been more than 6 hours, return the 'noFeedPet' message.
If it's been less than 6 hours, return a message saying the pet doesn't need feeding.
Use || and && to impplement minutes. If hour = more than 6 they need feeding. If hour = 6 and minute > 0 they need feeding.*/

if (plooples.hp == 0){
    console.log(`You're a terrible person! You didn't take good care of ${plooples.name} and now they're dead! I hope you're proud of yourself!`)
}
else if (((cHour - plooples.lastFedHour) > 6) || ((cHour - plooples.lastFedHour) == 6) && ((cMins - plooples.lastFedMins) > 0)){
    console.log(plooples.noFeedPet(plooples.hp))
}
else{
    console.log(`${plooples.name} isn't hungry yet!`)
}

// same as above but for watering

if (((cHour - plooples.lastWateredHour) > 3) || ((cHour - plooples.lastWateredHour) == 3) && ((cMins - plooples.lastWateredMins) > 0)){
    plooples.hp -= 10
}

if (plooples.hp == 0){
    console.log(`You're a terrible person! You didn't take good care of ${plooples.name} and now they're dead! I hope you're proud of yourself!`)
}
else if (((cHour - plooples.lastWateredHour) > 3) || ((cHour - plooples.lastWateredHour) == 3) && ((cMins - plooples.lastWateredMins) > 0)){
    console.log(plooples.noWaterPet(plooples.hp))
}
else{
    console.log(`${plooples.name} isn't thirsty yet!`)
    }