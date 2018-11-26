var startTextElem = document.getElementById("start-text");
var winsTextElem = document.getElementById("wins-text");
var lossesTextElem = document.getElementById("losses-text");
var guessesLeftElem = document.getElementById("guessesLeft-text");
var guessesSoFarElem = document.getElementById("GuessesSoFar-text");

var wins = 0;
var losses = 0;
var GuessesLeft = 6;
var GuessesSoFar = 0;

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function getRandom()
{
    return Math.floor(Math.random() * alphabet.length);
}
var randomLetter = getRandom();

document.onkeyup = function(event){
    var userchoice = event.key;
    console.log(randomLetter);
    console.log(event.key);

    if(userchoice === alphabet[randomLetter])
    {
        wins++;
        GuessesSoFar = 0;
        GuessesLeft = 6;
        console.log("winner");
        randomLetter = getRandom(); // new random number if winner announced, counters updated 
    }
    else if (userchoice !== alphabet[randomLetter]  && GuessesLeft >0)
    {
        GuessesSoFar++;
        GuessesLeft --;
        console.log("guess again");
    }
    else
    {
        losses++;
        GuessesSoFar = 0;
        GuessesLeft = 6;
        randomLetter = getRandom(); // new random letter if losses, updated counters 

    }

    startTextElem.textContent = event.key;
    winsTextElem.textContent = "wins:" + wins;
    lossesTextElem.textContent = "lossses:" + losses;
    guessesLeftElem.textContent = "guesses left:" + GuessesLeft;
    guessesSoFarElem.textContent = "guesses so far: " + GuessesSoFar;
}