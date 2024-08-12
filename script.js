let userScore=0;
let compScore=0;
let msgs=document.querySelector("#msg");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");
const selects=document.querySelectorAll(".choice");
const gameResult=(userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("You Win ..");
        msgs.innerText=`You Win! Your ${userChoice} Beats ${computerChoice}`;
        msgs.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You Lose ..");
        msgs.innerText=`You Lose! Computer's ${computerChoice} Beats your ${userChoice}`;
        msgs.style.backgroundColor="red";
    }
}
const drawGame=()=>{
    console.log("Game Was Draw");
    msgs.innerText="Game Draw";
    msgs.style.backgroundColor="rgba(0, 0, 0, 0.794)";
}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const rendomIdx=Math.floor(Math.random()*3); 
    return options[rendomIdx];
}
const playGame=((userChoice)=>{
     console.log("User Choice =",userChoice);
    const computerChoice=genCompChoice();
    console.log("Computer Choice =",computerChoice);

    if(userChoice===computerChoice){
           drawGame();
    }
    else{
        let userWin =true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissors"? false : true;
        }
        else{
            userWin=computerChoice==="rock"? false : true;
        }
         gameResult(userWin,userChoice,computerChoice);
    }
});
selects.forEach((choice)=>{
    choice.addEventListener("click",() =>{
     const userChoice=choice.getAttribute("id");
     playGame(userChoice);
    });
});
