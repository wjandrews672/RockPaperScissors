// rock paper scissors played against the computer
const buttons = document.querySelectorAll('button'); 
const p = document.querySelector('p');
const h2 = document.querySelector('h2');
const p2 = document.querySelector('#p2');
const btn = document.createElement("BUTTON");
const playerHealth = document.querySelector('#player-health');
const witchHealth = document.querySelector('#comp-health');
btn.textContent = 'Try Again?'

let answer;
let results;
let playerScore = 5;
let compScore = 5;
let gameOver;
let playerSelection;


function computerPlay () {
      // randomly return rock, paper, or scissors;
      let x = Math.floor(Math.random() * 3)
              switch(x) {
                    case 0:
                          answer= ("stone");
                          break;
                    case 1:
                          answer= ("sceptre");
                          break;
                    case 2:
                          answer= ("tome");
                  break;
          }
              return answer;
  }
 

 
function singleRound() {// return String to declare winner
     //makes user input case insensitive
    let compMove = computerPlay();
    // let playerSelection;
      //needs to call compMove and playerSelection so each game pulls new data.
      if ((playerSelection == "stone") && (compMove == "stone") || 
        (playerSelection =="sceptre") && (compMove =="sceptre") || 
        (playerSelection =="tome") && (compMove =="tome")) {
            results = ("Attack blocked");
        } else if ((playerSelection == "stone") && (compMove =="tome")) {
            playerScore--;
            results = ("you are hit. tome banishes stone");
        } else if ((playerSelection == "tome") && (compMove =="stone")) {
            compScore--;
            results = ("your incantation works. tome banishes stone");
        } else if ((playerSelection == "sceptre") && (compMove =="tome")) {
            compScore--;
            results = ("your spell lands. sceptre ingites tome");
        } else if ((playerSelection == "tome") && (compMove =="sceptre")) {
            playerScore--;
            results = ("you are burned. sceptre ignites tome");
        } else if ((playerSelection == "stone") && (compMove =="sceptre")) {
            compScore--;
            results = ("you hit the target. stone shatters sceptre");
        } else if ((playerSelection == "sceptre") && (compMove =="stone")) {
            playerScore--;
            results = ("you are dazed. stone shatters sceptre");
        } else {
            results = "typo?"
        }
        playerHealth.textContent=`Player Health: ${playerScore}`; 
        witchHealth. textContent= `Witch Health: ${compScore}`;
          return results;
}

// function game() {
//             if (playerScore == 5) {
//                   gameOver = "congratulations, You win!!";
//             } else {
//                   gameOver = "Too bad. You lose";
//             }
//       return (`${gameOver}, player score is ${playerScore} and computer score is ${compScore}`);
// }

function declareWinner() {
    if (compScore == 0) {
        p.textContent = "You slayed the witch and maintained your sanity. I suggest you flee before her coven investigates!";
  } else {
        p.textContent = "It seems you have lost control of your limbs. Your vision is fading and the ominous chanting is becoming deafening. I'm afraid this is the end, my friend.";
  }
  p2.appendChild(btn);
}

function playAgain() {
    location.reload();
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
        if (playerScore == 0 || compScore == 0) {
            declareWinner();
        } else {
            singleRound();
            p.textContent=results; 
        }
    });
});

btn.addEventListener('click', playAgain);

//add semi-opaque background boxes around text.
//finish css and flex formatting
//make declareWinner run on health 0 instead of next click.
