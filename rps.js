console.log('Hello World!')



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    function getComputerChoice() {
        let rpsRandom = Math.floor(Math.random() * 100) + 1;
        if (rpsRandom <= 33) {
            return `rock`
        }
        if (rpsRandom > 33 && rpsRandom <= 66) {
            return `paper`
        }
        if (rpsRandom > 66 && rpsRandom <= 100) {
            return `scissors`
        }
    }

    function getHumanChoice() {
        let humanChoice = prompt(`Pick between Rock / Paper / Scissors: `);
        return humanChoice;
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === `rock` && computerChoice === `scissors` ||
            humanChoice === `scissors` && computerChoice === `paper` ||
            humanChoice === `paper` && computerChoice === `rock`) {

            console.log(`Your ${humanChoice} beats computer's ${computerChoice}.`);
            humanScore++;

        } else if (computerChoice === `rock` && humanChoice === `scissors` ||
            computerChoice === `scissors` && humanChoice === `paper` ||
            computerChoice === `paper` && humanChoice === `rock`) {

            console.log(`Computer's ${computerChoice} beats your ${humanChoice}.`);
            computerScore++;

        } else if (computerChoice === humanChoice) {
            console.log(`We have a draw, ${computerChoice} vs ${humanChoice}.`);
            drawScore++;

        } else {
            console.log(`That is not a valid option`);
        }
    }
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore == computerScore) {
        return console.log(`We have a draw!
        You: ${humanScore}
        Computer: ${computerScore}
        Draw: ${drawScore}`);

    } else if (humanScore > computerScore) {
        return console.log(`You win! :D
        You: ${humanScore}
        Computer: ${computerScore}
        Draw: ${drawScore}`);

    } else if (humanScore < computerScore)
        return console.log(`You lose! :(
        You: ${humanScore}
        Computer: ${computerScore}
        Draw: ${drawScore}`);
}

playGame();

