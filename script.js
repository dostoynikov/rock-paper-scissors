


function getComputerChoice() {
    let choiceNo = Math.floor(Math.random() * (4 - 1) + 1);
    switch (choiceNo) {
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

let playerChoice = '';

let roundResult = document.querySelector('.results');


function playRound(playerSelection, computerSelection) {
  
    playerSelection = playerChoice;

    getComputerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        roundResult.textContent = "computer wins with paper over rock"
        return;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        roundResult.textContent = "player wins with rock over scissors";
        return;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        roundResult.textContent = "player wins with paper over rock";
        return;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        roundResult.textContent = "computer wins with scissors over paper";
        return;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        roundResult.textContent = "computer wins with rock over scissors";
        return;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        roundResult.textContent = "player wins with scissors over paper";
        return;
    } else {
        roundResult.textContent = "tie";
        return;
    };
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', function() {
    playerChoice = rock.value;
    playRound();
})

paper.addEventListener('click', function() {
    playerChoice = paper.value;
    playRound();
})

scissors.addEventListener('click', function() {
    playerChoice = scissors.value;
    playRound();
})









// function game() {
//     for (let i=0; i<5; i++) {
//     playRound(playerSelection, computerSelection);


// }
// console.log(playerScore + " " + computerScore)
// playerScore = 0;
// computerScore = 0;
// }


// game()


