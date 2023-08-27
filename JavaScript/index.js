// Coding JavaScript in NodeJs

const age = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
(age >= 18) ? "You are an adult" : "You are a child";

const names = ["Marco", "Mario", "Andres", "Dylan"];

for(const i in names){
    console.log(names[i]);
}

const showUserInfo = (userName, userAge) => {
    `The username is ${userName}, the user is ${userAge} years old`;
}
console.log(showUserInfo("Joe", 49));
console.log(showUserInfo("Carla", 23));