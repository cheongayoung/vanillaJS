const wishForm = document.getElementById("wish-form");
const wishInput = wishForm.querySelector("input");
const wishList = document.getElementById("wish-list");

const TODOS_KEY = "wishes";

let wishes = [];

function saveWish () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(wishes));
}

function deleteWish (event) {
    const li = event.target.parentElement;
    li.remove();
    wishes = wishes.filter(wish => wish.id !== parseInt(li.id));
    saveWish(); //--주의
}

function paintWish (newWish) {
    const li = document.createElement("li");
    li.id = newWish.id;
    const span = document.createElement("span");
    span.innerText = newWish.text; //--주의
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteWish);
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    wishList.appendChild(li);
}

function handleWishSubmit (event) {
    event.preventDefault();
    const newWish = wishInput.value;
    wishInput.value = ""; 
    const newWishObj = {
        text:newWish,
        id: Date.now() 
    }
    wishes.push(newWishObj);
    paintWish(newWishObj);
    saveWish();
}

wishForm.addEventListener("submit", handleWishSubmit);

const savedWish = localStorage.getItem(TODOS_KEY);

if (savedWish) {
    const parsedWishes = JSON.parse(savedWish);
    wishes = parsedWishes;
    parsedWishes.forEach(paintWish);
}