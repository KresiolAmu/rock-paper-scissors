console.log('Hello World!')

const buttons = document.querySelectorAll("button");

const resultArea = document.querySelector(".result");

const retryButton = document.createElement("button");
retryButton.textContent = "Play Again";

const body = document.querySelector("body");

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

    // function getHumanChoice() {
    //     let humanChoice = prompt(`Pick between Rock / Paper / Scissors: `);
    //     return humanChoice;
    // }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === `rock` && computerChoice === `scissors` ||
            humanChoice === `scissors` && computerChoice === `paper` ||
            humanChoice === `paper` && computerChoice === `rock`) {

            // div contains result text
            resultArea.textContent = `You Win! Your ${humanChoice} beats computer's ${computerChoice}.`;
            humanScore++;
            console.log(humanScore);

        } else if (computerChoice === `rock` && humanChoice === `scissors` ||
            computerChoice === `scissors` && humanChoice === `paper` ||
            computerChoice === `paper` && humanChoice === `rock`) {

            resultArea.textContent = `You Lose! Computer's ${computerChoice} beats your ${humanChoice}.`;
            computerScore++;

        } else if (computerChoice === humanChoice) {
            console.log(`We have a draw, ${computerChoice} vs ${humanChoice}.`);
            drawScore++;

        } else {
            console.log(`That is not a valid option`);
        }

        calcWin();
    }


    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());
    // playRound(getHumanChoice(), getComputerChoice());


    function calcWin() {
        if (humanScore == 5) {
            resultArea.textContent = `You win! :D
            You: ${humanScore}
            Computer: ${computerScore}
            Draw: ${drawScore}`;
            body.appendChild(retryButton);
            removeToolButton();
            humanScore = 0;
            computerScore = 0;
            drawScore = 0;
            return;


        } else if (computerScore == 5) {
            resultArea.textContent = `You lose! :(
            You: ${humanScore}
            Computer: ${computerScore}
            Draw: ${drawScore}`;
            body.appendChild(retryButton);
            removeToolButton();
            humanScore = 0;
            computerScore = 0;
            drawScore = 0;
            return;

        }
        // else return resultArea.textContent = `ERROR, in CalcWin()`;
    }

    const removeToolButton = () => buttons.forEach(btn => body.removeChild(btn));

    // console.log(calcWin());
    // alert(calcWin());

    //adds addEventListener click to every tool
    buttons.forEach(btn => btn.addEventListener("click", (clickEvent) => {
        console.log(clickEvent.target.textContent);
        playRound(clickEvent.target.textContent, getComputerChoice())
    }
    ));

    //retryButton adds tool back and removes itself
    retryButton.addEventListener("click", () => {
        buttons.forEach(btn => body.prepend(btn));
        body.removeChild(retryButton);
        resultArea.textContent = "";
    });

}

playGame();

