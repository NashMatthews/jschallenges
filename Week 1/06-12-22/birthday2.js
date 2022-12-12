let month = 1;
let day = 20;

today = new Date();
var birthday = new Date(today.getFullYear(), month, day);
if (today.getMonth() == month && today.getDate() > day)
or (today.getMonth() > month); {
  birthday.setFullYear(birthday.getFullYear() + 1);
}
var oneDay = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((birthday.getTime() - today.getTime()) / (oneDay)) +
    " days left until your burfday!"
);
