function getComputerChoice() {
    let choice = Math.random() * 3;

    switch (choice) {
        case 0:
            return "rock";        
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getPlayerFunction() {
    play = prompt().toLowerCase;
    if (play == "rock" || play == "paper" || play == "scissors") {
        return play;
    }
    else {
        console.log("enter rock paper or scissors please");
        return getPlayerFunction();
    }
    
}

function playRound(player, computer) {
    let output =  "Player played " + player + " and computer played " + computer + ". \n")
    if (player == computer) {
        output += "It's a tie.";
    }

    switch (player + computer) {
        case "rockpaper":
            output += "Computer wins.";
            break;
        case "rockscissors":
            output += "Player wins.";
            break;
        case "paperrock":
            output += "Player wins.";
            break;
        case "paperscissors":
            output += "Computer wins.";
            break;
        case "scissorsrock":
            output += "Computer wins";
            break;
        case "scissorspaper":
            output += "Player wins";
            break;    
    }

    return output;
}