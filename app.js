let userScore = 0;
let ComputerScore = 0;



const Choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("User");
const CompScorePara = document.getElementById("Computer");


const genComputer = () => {
    const options = ["rock", "paper", "scissors"]
    let i = Math.floor(Math.random() * 3);
    return options[i];
}


const drawGame = () => {
    console.log("Draw game");
    msg.innerText="Draw";
    msg.style.backgroundColor="#2C4E80";
}




const showwin = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText ="You Win!!";
        msg.style.backgroundColor="green";
        
    } else {
        ComputerScore ++;
        CompScorePara.innerText = ComputerScore;
        msg.innerText ="You Lose!!";
        msg.style.backgroundColor="red";
    }
}




const playgame = (userchoice) => {
    console.log("User Choice", userchoice);
    const compchoice = genComputer();
    console.log("Computer Choice", compchoice);
    
    if (userchoice === compchoice) {
        drawGame();
    } else {
        const winningConditions = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper"
        };
        const userWins = winningConditions[userchoice] === compchoice;
        showwin(userWins,compchoice,userchoice);
    }
}






Choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});