//let month = 1;
//let day = 21

today = new Date();
let birthday = new Date(month, day);

/* if today's month is the same and the birthday month
and todays day is the same as the birthday day */

if (today.getMonth() == month && today.getDate() > day)
{

// then set birthday as the year and month

    birthday.setFullYear(birthday.getFullYear() + month);
}

// set the length of one day in milliseconds

//let oneDay = 1000*60*60*24;

// round milliseconds for birthday and current time to nearest integer

console.log(Math.ceil((birthday.getTime() - today.getTime())/(oneDay))+
" days left until your burfday!");


// set the length of one day

let oneDay = 1000*60*60*24;

// declare month and day

let month = 1
let day = 21

