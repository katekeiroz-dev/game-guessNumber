'use strict';


let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 10;


document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);

    //when there is no input
    if(!guess){
        document.querySelector('.message').textContent =
        'Type a number !';

        //when player wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🥳🎉 YAY! CORRECT NUMBER !';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        //when guess is too high
    } else if(guess > secretNumber) {
        if(score > 1){
            document.querySelector('.message').textContent =
            'Too high! Try again.' ;
            score --;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent =
            '😭 You LOST! Click above to play again.' ;
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
} )

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