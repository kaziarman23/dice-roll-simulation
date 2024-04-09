const buttonEl = document.querySelector(".button");
const diceEl = document.querySelector(".dice");
const historyEl = document.querySelector(".history");

let history = [] 
buttonEl.addEventListener("click", function () {
   
    changeDice();
});




function changeDice() {
    const randomNumber = Math.ceil(Math.random() * 6);
    
    if (randomNumber === 1) {
        diceEl.innerHTML = "&#9856;";
    } else if (randomNumber === 2) {
        diceEl.innerHTML = "&#9857;";
    } else if (randomNumber === 3) {
        diceEl.innerHTML = "&#9858;";
    } else if (randomNumber === 4) {
        diceEl.innerHTML = "&#9859;";
    } else if (randomNumber === 5) {
        diceEl.innerHTML = "&#9860;";
    } else {
        diceEl.innerHTML = "&#9861;";
    }

    history.push(randomNumber)
    updateHistory()
}


function updateHistory() {
    historyEl.innerHTML =""
    for(let i = 0; i < history.length; i++){
        const listItem = document.createElement("li")
        listItem.innerHTML = `Roll ${i + 1}: <span>${history[i]}</span>`
        historyEl.appendChild(listItem)
    }
}