  
// rock paper scissors played against the computer

function computerPlay () {
      // randomly return rock, paper, or scissors;
      let x = Math.floor(Math.random() * 3)
              switch(x) {
                    case 0:
                          answer= ("rock");
                          break;
                    case 1:
                          answer= ("scissors");
                          break;
                    case 2:
                          answer= ("paper");
                  break;
          }
          console.log(x);
              return answer;
  }
  
  function singleRound (playerSelection, compMove) {
      // return String to declare winner
      if ((playerSelection == "rock") && (compMove == "rock") || 
        (playerSelection =="scissors") && (compMove =="scissors") || 
        (playerSelection =="paper") && (compMove =="paper")) {
              results = ("tie");
        } else if ((playerSelection == "rock") && (compMove =="paper")) {
              results = ("you lose. paper beats rock");
        } else if ((playerSelection == "paper") && (compMove =="rock")) {
              results = ("you win. paper beats rock");
        } else if ((playerSelection == "scissors") && (compMove =="paper")) {
              results = ("you win. scissors beats paper");
        } else if ((playerSelection == "paper") && (compMove =="scissors")) {
              results = ("you lose. scissors beats paper");
        } else if ((playerSelection == "rock") && (compMove =="scissors")) {
              results = ("you win. rock beats scissors");
        } else if ((playerSelection == "scissors") && (compMove =="rock")) {
                  results = ("you lose. rock beats scissors");
        } else {
            results = "typo?"
        }
          console.log(results);
  }
      //arguments need to be case insensitive
  let answer;
  let results;
  let Question = prompt("rock,paper,scissors"); //make prompt?
  let playerSelection = Question.toLowerCase();
  let compMove = computerPlay();
  console.log(singleRound(playerSelection, compMove));