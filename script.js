// rock paper scissors played against the computer

let answer;
let results;


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
              return answer;
  }
  
function singleRound () {// return String to declare winner
    let Question = prompt("rock,paper,scissors"); //grabs user input
    let playerSelection = Question.toLowerCase(); //makes user input case insensitive
    let compMove = computerPlay();
      //needs to call compMove and playerSelection so each game pulls new data.
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
          return results;
  }
  
 