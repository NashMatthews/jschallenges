// Activity 5

// create an array of four films

films = ["Mandy", "The Disaster Artist", "They Live", "Fury Road"];

// for loop to cycle through the array

for (filmNumber = 0; filmNumber < films.length; filmNumber++){
    
// check if third film is Ghostbusters    

    if (filmNumber == 2 && films[2] == "Ghostbusters"){
        console.log("Yay it's Ghostbusters!")
    }   else if (filmNumber == 2 && films[2] != "Ghostbusters"){
        console.log("Boo! We want Ghostbusters!")

// for the first, second and fourth films just log the name of the film

    }   else{
        console.log(films[filmNumber])
    }

}