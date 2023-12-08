


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

function playRound(playerSelection, computerSelection) {
  
    playerSelection = playerChoice;

    getComputerChoice();
    computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        console.log('computer wins with paper over rock')
        return "computer wins with paper over rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        console.log('player wins with rock over scissors')
        return "player wins with rock over scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        console.log('player wins with paper over rock')
        return "player wins with paper over rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        console.log('computer wins with scissors over paper')
        return "computer wins with scissors over paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log('computer wins with rock over scissors')
        return "computer wins with rock over scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        console.log('player wins with scissors over paper')
        return "player wins with scissors over paper";
    } else {
        console.log('tie')
        return "tie";
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


