function computerPlay() {
    let i = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (i) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2: 
            computerChoice = "scissors";
            break;
        default:
            computerChoice = "rock";
            break;
    }
    return computerChoice;
}

function takeInput() {
    let playerChoice = prompt('Type "rock", "paper" or "scissors"').toLowerCase();
    console.log(playerChoice);
    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice =="scissors") {
        resolveGame(playerChoice, computerPlay());
    }
    else {
        console.log("you didnt type good.");
    }
}

function resolveGame(playerChoice, computerChoice) {
    let choices = playerChoice + computerChoice;
    console.log (`you chose ${playerChoice} and the computer chose ${computerChoice}...`);
    switch (true) {
        case (choices == "rockpaper" || choices == "paperscissors" || choices == "scissorsrock"):
            console.log("The computer wins ...");
            break;
        case (choices == "paperrock" || choices == "scissorspaper" || choices == "rockscissors"):
            console.log("You win ...");
            break;  
        case (choices == "rockrock" || choices == "paperpaper" || choices == "scissorsscissors"):
            console.log("It's a draw ...");
            break;
        default:
            console.log("huh?");
            break;     
    }   
}