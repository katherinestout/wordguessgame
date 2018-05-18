
        var $newGameButton = document.getElementById('new-game-button');
        var $placeholders = document.getElementById('placeholders');
        var $guessedLetters = document.getElementById('guessed-letters');
        var $guessesLeft = document.getElementById('guesses-left');
        var $wins = document.getElementById('wins');
        var $losses = document.getElementById('losses');
        
        var wordBank= ['Gin', 'Wine', 'Beer', 'Vodka'];
        
        var wins = 0;
        var losses = 0;
        var guessesLeft = 8;
        var gameRunning = false;
        var pickedWord = '';
        var pickedWordPlaceholderArr = [];
        var guessedLetterBank = [];
        var incorrectLetterBank = [];
        
        function newGame(){
        
            gameRunning = true;
            guessesLeft = 8;
            guessedLetterBank = [];
            incorrectLetterBank = [];
            pickedWordPlaceholderArr = [];
        //pick a new word
        pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        
        for (var i=0; i < pickedWord.length; i++){
            if (pickedWord[i] === ' ') {
                pickedWordPlaceholderArr.push(' ');
        
            } else { pickedWordPlaceholderArr.push(' ');
        }
        }
        $guessesLeft.textContent = guessesLeft;
        $placeholders.textContent = pickedWordPlaceholderArr.join(' ');
        $guessedLetters.textContent = incorrectLetterBank;
        
        }
        
        function letterGuess(letter){
            console.log(letter);
        
            if (gameRunning === true && guessedLetterBank.indexOf(letter) === -1){
        
                guessedLetterBank.push(letter);
        
                //check if guessed letter is in picked word
        
                for (var i= 0; i < pickedWord.length; i++) {
        
                    //make tolowercase
                    if (pickedWord[i].toLowerCase() === letter.toLowerCase()){
        
                        //if a match, swap out that character....
                        pickedWordPlaceholderArr[i] = pickedWord[i];
        
        
                    }
                }
                console.log(pickedWordPlaceholderArr);
                $placeholders.textContent = pickedWordPlaceholderArr.join('');
                
        
            } 
            else{
                if(!gameRunning){
                    alert("The game isn't running!");
                } else{
                    alert("you've guessed this, try a new one!");
                }
            }
        }
            
        
        $newGameButton.addEventListener('click', newGame);
        
        document.onkeyup = function(event) {
            console.dir(event);
            if (event.keyCode >= 65 && event.keyCode <= 90)
            {
                letterGuess(event.key); 
            }
        
        }
