//@ts-check

let playerControls = document.getElementById("player-controls");
let btnRock = document.getElementById("btn-rock");
let btnPaper = document.getElementById("btn-paper");
let btnScissors = document.getElementById("btn-scissors");

function rockClicked(){
    console.log("rock was selected");
}

btnRock?.addEventListener("click",rockClicked);

function paperClicked(){
    console.log("paper was selected");
}

btnPaper?.addEventListener("click",paperClicked);

function scissorsClicked(){
    console.log("scissor was selected");
}

btnScissors?.addEventListener("click",scissorsClicked);