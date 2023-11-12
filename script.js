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

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "rock" || computerSelection == "paper") {
        return "computer wins with paper over rock"
    } else if (playerSelection == "rock" || computerSelection == "scissors") {
        return "player wins with rock over scissors"
    } else if (playerSelection == "paper" || computerSelection == "rock") {
        return "player wins with paper over rock"
    } else if (playerSelection == "paper" || computerSelection == "scissors") {
        return "computer wins with scissors over paper"
    } else if (playerSelection == "scissors" || computerSelection == "rock") {
        return "computer wins with rock over scissors"
    } else if (playerSelection == "scissors" || computerSelection == "paper") {
        return "player wins with scissors over paper"
    } else return "tie"
}

const computerSelection = getComputerChoice();

console.log(playRound("paper", computerSelection))