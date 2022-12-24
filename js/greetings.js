
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreethings(username);
}

function paintGreethings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreethings(savedUsername);
}




/*



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click", handleLinkClick);


const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLoginSubmit);


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    if(username === "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    } else {
        console.log(username);
    }
}

loginButton.addEventListener("click", onLoginBtnClick);



const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);


const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);


const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);


const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("ALL GOOD!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

true || true === true
true || false === true
false || true === true
false || false === false

true && true === true
false && true === false
true && false === false
true && true === true

if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise");
} else if (age === 100) {
    console.log("wow you are wise");
} else if (age > 80) {
    console.log("You can do whatever you want");
} 

const age = prompt("How old are you?");

console.log(age);
console.log(typeof age);
console.log(parseInt(age));

const age = parseInt(prompt("How old are you?"));


const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
};

const plusResult = calculator.plus(2, 3);
console.log(plusResult);
const minusResult = calculator.minus(plusResult, 10);
console.log(minusResult);
const timesResult = calculator.times(10, minusResult);
console.log(timesResult);
const divideResult = calculator.divide(timesResult, plusResult);
console.log(divideResult);
const powerResult = calculator.power(divideResult, minusResult);
console.log(powerResult);


const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krage);

const calculator = {
    minus: function (a, b) {
        console.log(a - b);
    }
};

calculator.minus(5, 1);

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    };
};

calculator.add(5, 1);

function plus(a) {
    console.log(a - 5);
};

plus(5, 10, 15, 15, 6);

const player = {
    name: "nico",
    age: 98,
};

console.log(player);
player.sexy = "soon";
console.log(player, console);

const me = "sexy";
const days = [1, 2, 3, "tomato", me];
console.log(days[2]);
console.log(days);
days[2] = "water";
console.log(days[2]);
console.log(days);
days.push("meat");
console.log(days);

const player = {
    name: "nico",
    sayHello: function(otherPersonName) {
        console.log("hello! " + otherPersonName + " nice to meet you");
    }
};

console.log(player.name);
player.sayHello("lynn");


function plus(a, b) {
    console.log(a + b);
}
function divide(a, b) {
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);


function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

const player = {
    name: "jinho",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player);

player.lastName = "kim";
player.points = 20;
console.log(player);

player.points = player.points + 15;
console.log(player);


const playerName = "jinho";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek[6]);

const amIFat = false;
let something;
console.log(amIFat);


const a = 5;
const b = 2;
let myName = "jinho";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "jinholas";

console.log("your new name is " + myName);

*/