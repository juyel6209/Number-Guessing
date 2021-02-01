let resultArea = document.getElementById('result-area');
let guess = document.getElementById('guessValue');
let randomValue = document.getElementById('randomNumber');
let guessAllNumber = [];
let totalGuess = 1;
let randomInput = randomNumber();
let currentNumber = document.getElementById('currentGuess');
let previousNumber = document.getElementById('previousGuess');

function calculateArea(){

    
    
    let guessInput = guessNumber();

    console.log(randomInput);

    if(isNaN(guessInput) || guessInput == '' || guessInput < 0 || guessInput > 100){
        alert('Enter Any Random Number Between 1 To 100');
        guess.value = '';
    }
    else{

        document.getElementById('result-area').style.display = 'block';

        if(randomInput == guessInput){
            document.getElementById('won').innerHTML = `Congratulation !! You Won !!!`;
            document.getElementById('lost').innerHTML = '';
            guess.value = '';
            randomValue.innerText = randomInput;
            alert('Congratulation !!!');
            currentNumber.innerText = guessInput;

            setTimeout(function(){
                window.location.reload(1);
             }, 5000);
        }
        else{
            document.getElementById('lost').innerHTML = `You Lost !!! Please Try Again !!`;
            document.getElementById('won').innerHTML = '';
            guess.value = '';
            currentNumber.innerText = guessInput;
            previousNumber.innerText += guessInput +' ';           
        }

        guessAllNumber.push(guessInput);

        if(guessAllNumber.length == 10){
            randomValue.innerText = randomInput;
            alert('Game Over');
            
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        }
       
    }
}

function guessNumber(){
    return guess.value
}

function randomNumber(){
    
    const random = Math.floor(Math.random()*100);
    return random; 
}