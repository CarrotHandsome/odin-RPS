let playerWins = 0;
let computerWins = 0;

window.onload = function(e) {    
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rock.addEventListener("click", () => getPlayerChoice("rock"));
    paper.addEventListener("click", () => getPlayerChoice("paper"));
    scissors.addEventListener("click", () => getPlayerChoice("scissors"));

    document.getElementById("playerWins").innerText = playerWins;
    document.getElementById("computerWins").innerText = computerWins;
}



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return "rock";        
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerChoice(play) {
    let computerPlay = getComputerChoice();
    playRound(play, computerPlay);   
    document.getElementById("computerPlayed").innerText = "Computer played " + computerPlay;
}

function playRound(player, computer) {
    //console.log("Player played " + player + " and computer played " + computer + ". \n");
    let output = "";
    if (player == computer) {
        output += "It's a tie.";
    }

    switch (player + computer) {
        case "rockpaper":
            output += "Computer wins.";
            computerWins++;
            break;
        case "rockscissors":
            output += "Player wins.";
            playerWins++;
            break;
        case "paperrock":
            output += "Player wins.";
            playerWins++;
            break;
        case "paperscissors":
            output += "Computer wins.";
            computerWins++;
            break;
        case "scissorsrock":
            output += "Computer wins";
            computerWins++;
            break;
        case "scissorspaper":
            output += "Player wins";
            playerWins++;
            break;    
    }

    document.getElementById("playerWins").innerText = playerWins;
    document.getElementById("computerWins").innerText = computerWins;

    if (playerWins == 5) {
        document.getElementById("winner").innerText = "The player wins";
        location.reload();
    }
    else if (computerWins == 5) {
        document.getElementById("winner").innerText = "The computer wins";
        location.reload();
    }

}

