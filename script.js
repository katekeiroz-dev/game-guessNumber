'use strict';


let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 10;
let highscore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess){
        //document.querySelector('.message').textContent = 'Type a number !';
        displayMessage('Type a number !');

        //when player wins
    } else if(guess === secretNumber){
        //document.querySelector('.message').textContent = '🥳🎉 YAY! CORRECT NUMBER !';
        displayMessage('🥳🎉 YAY! CORRECT NUMBER !')
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;

        }


        

        //refractoring code 
        //when guess is wrong 
    }else if (guess !== secretNumber){
        if(score > 1){
            //document.querySelector('.message').textContent =guess > secretNumber ? 'Too high! Try again.' :'Too low! Try again.' ;
            displayMessage (guess > secretNumber ? 'Too high! Try again.' : 'Too low! Try again.');
            score --;
            document.querySelector('.score').textContent = score;
        }else{
           // document.querySelector('.message').textContent = '😭 You LOST! Click above to play again.' ;
           displayMessage('😭 You LOST! Click above to play again');
            document.querySelector('.score').textContent = 0;
        }

    }

    /*
    } else if(guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent =
            guess > secretNumber ? 'Too high! Try again.' :'Too low! Try again.' ;
            score --;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent =
            '😭 You LOST! Click above to play again.' ;
            document.querySelector('.score').textContent = 0;
        }

    }
  
    
      //when guess is too low
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent =
            'Too low! Try again.' ;
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message').textContent =
            '😭 You LOST! Click above to play again.' ;
        }
    }
        */
});




document.querySelector('.again').addEventListener('click', function() {

    score = 10;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})