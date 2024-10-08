//@ts-check

//let playerControls = document.getElementById("player-controls");
//let btnRock = document.getElementById("btn-rock");
//let btnPaper = document.getElementById("btn-paper");
//let btnScissors = document.getElementById("btn-scissors");
/** @type { HTMLElement }*/
//@ts-ignore We know 
let playerControls = document.getElementById("player-controls");
/** @type { HTMLElement }*/
//@ts-ignore We know 
let gameResultHeader = document.getElementById("game-results");
/** @type { HTMLElement }*/
//@ts-ignore We know 
let gameRestartHeader = document.getElementById("game-restart");

gameResultHeader.innerText = "Hey there!";

let isGameOver = false;
//function rockClicked(name){
    //console.log("rock was selected");
//}

//btnRock?.addEventListener("click",rockClicked);

//function paperClicked(name){
    //console.log("paper was selected");
//}

//btnPaper?.addEventListener("click",paperClicked);

//function scissorsClicked(name){
   // console.log("scissor was selected");
//}

//btnScissors?.addEventListener("click",scissorsClicked);

let weapons =[
    {
        type:"Rock",
        beats:"Scissors",
    },
    {
        type:"paper",
        beats:"Rock",
    },
    {
        type:"Scissors",
        beats:"paper"
    }
];

function pickRandomWeapon(weapon){
    let randy = Math.floor(Math.random()*weapons.length);
    return weapons[randy];
};

function determineOutcome(playerWeapon,computerWeapon) {
    if(playerWeapon.type === computerWeapon.type){
        return "it's a tie! try again";
    }

    //isGameOver = true

    if(playerWeapon.beats === computerWeapon.type){
        return`player wins! ${playerWeapon.type} beats ${computerWeapon.type}`
    }
    return `computer wins! ${computerWeapon.type} beats ${playerWeapon.type}`
}

function playerControlHandler(e){
    if(isGameOver){
       return;
    }




    let weaponName = e.target.innerText;
    let playerWeapon = weapons.find(w => w.type === weaponName);

    if(!playerWeapon){
        console.log("error! Player weapon undefined");
        return;
    }
    let computerWeapon = pickRandomWeapon(weapons);

    let result = determineOutcome(playerWeapon,computerWeapon);
    console.log(result);
}
function gameRestartHandler(e){
    if (e.target.id === "btn-restart") {
		isGameOver = false;
		showPlayerControls();
		gameResultHeader.innerText = "";
	}
};
function showRestart(){
    gameRestartHeader.style.display ="initial"
    playerControls.style.display ="none"
};
function showPlayerControls(){
    gameRestartHeader.style.display ="none"
    playerControls.style.display ="initial"
}
playerControls.addEventListener("click",playerControlHandler);
gameRestartHeader.addEventListener("click", gameRestartHandler);
