const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const userGreeting = document.querySelector("#userGreeting");
const loginDiv = document.querySelector("#login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit (event) {
    event.preventDefault();
    loginDiv.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    userGreeting.innerText = `Hello ${username}`;  
    greeting.classList.remove(HIDDEN_CLASSNAME);
} 

// loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

// console.log(savedUsername);

if (savedUsername === null) {
    //SHOW THE FORM
    loginDiv.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //SHOW THE GREETING 
    loginDiv.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}