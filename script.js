function opponentChoice() // Generates a pseudo-random opponent choice
{
    let choice = "";
    let randomNum = Math.floor((Math.random() * 3) + 1);

    randomNum === 1 ? choice = "rock" : randomNum === 2 ? choice = "paper" : randomNum ===  3 ? choice = "scissors" : choice = "Error";

    return choice;
}

function rpsGame() // Plays  a round of the rock, paper, scissors game (rps)
{
    let opponentMove = opponentChoice();
    playerChoice = prompt("M");
    playerChoice.toLowerCase()

    if (playerChoice === opponentMove)
    {
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. It's a tie.`;
    }
    else if (playerChoice === "rock" && opponentMove === "scissors" || playerChoice === "scissors" && opponentMove === "paper" || playerChoice === "paper" && opponentMove === "rock") 
    {
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You win!`;
    }
    else {
        return `You chose ${playerChoice}, Opponent chose: ${opponentMove}. You lose...`;
    }
}

const rockButton = document.querySelector(".rock-button");
rockButton.addEventListener("click", );

const paperButton = document.querySelector(".rock-button");
paperButton.addEventListener("click", );

const scissorButton = document.querySelector(".rock-button");
scissorButton.addEventListener("click", );

const resultsText = document.querySelector(".results-text");