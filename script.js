const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");

const resultsText = document.querySelector(".results-text");

function opponentChoice() // Generates a pseudo-random opponent choice
{
    let choice = "";
    let randomNum = Math.floor((Math.random() * 3) + 1);

    randomNum === 1 ? choice = "rock" : randomNum === 2 ? choice = "paper" : randomNum ===  3 ? choice = "scissors" : choice = "Error";

    return choice;
}

function rockGame()
{
    let opponentMove = opponentChoice();
    let playerChoice = "rock";

    if (playerChoice === opponentMove)
    {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. It's a tie.`;
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. It's a tie.`;
    }
    else if (playerChoice === "rock" && opponentMove === "scissors" || playerChoice === "scissors" && opponentMove === "paper" || playerChoice === "paper" && opponentMove === "rock") 
    {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You win!`;
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You win!`;
    }
    else {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You lose.`;
        return `You chose ${playerChoice}, Opponent chose: ${opponentMove}. You lose...`;
    }
}

function paperGame()
{
    let opponentMove = opponentChoice();
    let playerChoice = "paper";

    if (playerChoice === opponentMove)
    {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. It's a tie.`;
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. It's a tie.`;
    }
    else if (playerChoice === "rock" && opponentMove === "scissors" || playerChoice === "scissors" && opponentMove === "paper" || playerChoice === "paper" && opponentMove === "rock") 
    {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You win!`;
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You win!`;
    }
    else {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You lose.`;
        return `You chose ${playerChoice}, Opponent chose: ${opponentMove}. You lose...`;
    }
}

function scissorsGame()
{
    let opponentMove = opponentChoice();
    let playerChoice = "scissors";

    if (playerChoice === opponentMove)
    {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. It's a tie.`;
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. It's a tie.`;
    }
    else if (playerChoice === "rock" && opponentMove === "scissors" || playerChoice === "scissors" && opponentMove === "paper" || playerChoice === "paper" && opponentMove === "rock") 
    {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You win!`;
        return `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You win!`;
    }
    else {
        resultsText.textContent = `You chose: ${playerChoice}, Opponent chose: ${opponentMove}. You lose.`;
        return `You chose ${playerChoice}, Opponent chose: ${opponentMove}. You lose...`;
    }
}

rockButton.addEventListener("click", rockGame);
paperButton.addEventListener("click", paperGame);
scissorsButton.addEventListener("click", scissorsGame);