const userName = prompt("What is your name?");
const userAge = +prompt("How old are you?");
const userSmoke = confirm("Do you smoke?");
let adultSmoke = `Привіт ${userName}, що ж, ти сам обрав цей шлях...`;
let adult = `Привіт ${userName}, чудово! Ти мабуть ще й спортом займаєшся!`;
let notAdultSmoke = `Привіт ${userName}! А батьки знають про це?`;
let notAdult = `Привіт ${userName}! Правильно, зараз головне добре вчитися!`;

if (userAge < 18) {
  if (userSmoke === true) {
    console.log(notAdultSmoke);
  } else {
    console.log(notAdult);
  }
}
if (userAge > 18) {
  if (userSmoke === false) {
    console.log(adult);
  } else {
    console.log(adultSmoke);
  }
}
