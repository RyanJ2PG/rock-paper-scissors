let playerWins = 0;
let computerWins = 0;
let rounds = 0;

function computerPlay(){
    let compRPS = ["Rock", "Paper", "Scissors"];
    let compSel = compRPS[Math.floor(Math.random()*compRPS.length)];
    return compSel;
}

function extraGame(){
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It is a tie!");
        extraGame();
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        alert("You lose!");
        computerWins++;
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        alert("You lose!");
        computerWins++;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        alert("You win!");
        playerWins++;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        alert("You win!");
        playerWins++;
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        alert("You win!");
        playerWins++;
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        alert("You lose!");
        computerWins++;
    } else {
        alert("You didnt enter rock, paper, or scissors. Click to play again!");
        extraGame();
    }
}

function round(){
        rounds++;
    alert("Round "+ rounds);
        let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        alert("The Score is\nPlayer: " + playerWins + "\nComputer: " + computerWins);
}

function game(){
    round();
    round();
    round();
    round();
    round();
    if (playerWins > computerWins){
        alert("wow sick u won :-)")
    } else {
        alert("the comp won, ur dog")
    }
}
game();

// for (let i = 1; i <= 5; i++){
//     round(i); (roundNum is being assigned here)
// function round(roundNum){}
// alert("Round "+ roundNum);

