console.log("Hello, World!!")

function getComputerChoice(){
    var choice = Math.random() * 5;
    var retVal = Math.round(choice);
    retVal = retVal%3;
    if(retVal == 0){
        return "Rock";
    }else if(retVal == 1){
        return "Paper";
    }else if(retVal == 2){
        return "Scissors";
    }
}


function getHumanChoice(retVal){
    if(retVal == 0){
        return "Rock";
    }else if(retVal == 1){
        return "Paper";
    }else if(retVal == 2){
        return "Scissors";
    }
}

function playRound(computerChoice, humanChoice){
    if(computerChoice == "Scissors" && humanChoice == "Paper")
    return "Computer Wins";
    else if(computerChoice == "Paper" && humanChoice == "Rock")
        return "Computer Wins";
    else if(computerChoice == "Rock" && humanChoice == "Scissors")
        return "Computer Wins";
    else if(computerChoice == "Scissors" && humanChoice == "Scissors")
        return "Draw"
        else if(computerChoice == "Rock" && humanChoice == "Rock")
        return "Draw"
        else if(computerChoice == "Paper" && humanChoice == "Paper")
        return "Draw"
    else
        return "Human Wins"
    
}



var compChoice = getComputerChoice();
var choice = prompt("Whats your choice?");
var humChoice = getHumanChoice(choice);

console.log("Computer choice is "+compChoice);
console.log("Human choice is "+humChoice);
console.log(playRound(compChoice, humChoice));