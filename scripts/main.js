let playGame = confirm("Shall we play rock, paper or scissors");
if(playGame){
  //Play Game
  let playerChoice = prompt("Please enter rock, paper or scissors.")
  if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
      let computerChoice = Math.floor(Math.random() * 3 + 1);
    }else{
      alert("You didn't enter rock, paper or scissors")
    }
  }else{
    alert("I guess you changed your mind. Maybe next time.")
  }
}else{
  alert("Ok, maybe next time")
}