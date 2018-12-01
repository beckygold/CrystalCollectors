// create variables for all elements

var wins = 0;
var losses = 0;
var totalScore = " ";
var targetNumber = " ";
var crystalBlue = " ";
var crystalGreen = " ";
var crystalRed = " ";
var crystalYellow = " ";

var targetNumberText = document.getElementById("targetnumber-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var totalScoreText = document.getElementById("totalscore-text");

// the computer picks a random number between 19 - 120 and 
function start() {
    var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    console.log("Number: " + targetNumber);
    // targetNumberText.textContent = "Target Number: " + targetNumber.value;
    $("#targetNumberText").html(targetNumber);
    
// each crystal is set to a random hidden value between 1 - 12
    var crystalBlue = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Blue: " + crystalBlue);
    var crystalGreen = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Green: " + crystalGreen);
    var crystalRed = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Red: " + crystalRed);
    var crystalYellow = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Yellow: " + crystalYellow);
}

start()

// when crystal is clicked, add the hidden value to the player's total score
$("#crystalBlue").click(function() {
    totalScore.value += crystalBlue;
    $('#totalScoreText').html(totalScore);
});
// player wins if total score = random number

// player loses if total score > random number

// game restarts whenever player wins / loses. page does not refresh.