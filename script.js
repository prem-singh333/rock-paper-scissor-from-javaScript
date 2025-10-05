
let choiceArr = ["rock", "paper", "scissor"];
comCh = document.getElementById("comScore")
userCh = document.getElementById("userScore")

let comScore = 0;
let userScore = 0;

comCh.textContent = `Com: ${comScore}`
userCh.textContent = `Your: ${userScore}`

let newGame = document.getElementById("newGame")
 newGame.style.display = "none"
 let msg = document.querySelector(".won-text");

function userChoice(choice) {
    let comChoice = choiceArr[Math.floor(Math.random() * 3)]

     newGame.style.display = "block"

    if (choice === comChoice) {
        msg.textContent = `Oops! both are same ${choice}`

    } else if ((choice === "rock" && comChoice === "scissor") || (choice === "paper" && comChoice === "rock") || (choice === "scissor" && comChoice === "paper")) {
        msg.textContent = `Congratulations! You won, your ${choice} beats the ${comChoice}`
        userScore++

    } else {
        msg.textContent = `You lose, ${comChoice} beats your ${choice}`
        comScore++
    }

    comCh.textContent = `Com: ${comScore}`
    userCh.textContent = `Your: ${userScore}`
}

function new_game(){
    newGame.style.display = "none"
    userScore = 0;
    comScore = 0;

    comCh.textContent = `Com: ${comScore}`
    userCh.textContent = `Your: ${userScore}`

    msg.textContent = ""
}