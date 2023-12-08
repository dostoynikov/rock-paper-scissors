function getComputerChoice () {
    let choiceNo = Math.floor(Math.random()*(4-1)+1);
    switch(choiceNo) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"
            break;
    }
};

let playerScore = 0;
let computerScore = 0;


let playerSelection = prompt("rock or paper or scissors?");
let computerSelection;

function playRound (playerSelection, computerSelection) {

    getComputerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "computer wins with paper over rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "player wins with rock over scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "player wins with paper over rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "computer wins with scissors over paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "computer wins with rock over scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "player wins with scissors over paper";
    } else {
        return "tie";
    };
}



function game() {
    for (let i=0; i<5; i++) {
    playRound(playerSelection, computerSelection);
    

}
console.log(playerScore + " " + computerScore)
playerScore = 0;
computerScore = 0;
}


game()