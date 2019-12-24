// create variables for all elements

var wins = 0;
var losses = 0;
var totalScore = 0;
var targetNumber = 0;
var crystalBlue = 0;
var crystalGreen = 0;
var crystalRed = 0;
var crystalYellow = 0;

// Putting HTML elements into variables
var targetNumberText = $("#targetnumber-text");
var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var totalScoreText = $("#totalscore-text");
var actionText = $("#action-text");

// the computer picks a random number between 19 - 120 and 
function start() {
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    console.log("Target Number: " + targetNumber);
    targetNumberText.text(`Target Number: ${targetNumber}`);
    
// each crystal is set to a random hidden value between 1 - 12
    crystalBlue = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Blue: " + crystalBlue);
    crystalGreen = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Green: " + crystalGreen);
    crystalRed = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Red: " + crystalRed);
    crystalYellow = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("Yellow: " + crystalYellow);
}

start()

// when crystal is clicked, add the hidden value to the player's total score
$("#crystal-blue").click(function() {
    totalScore += crystalBlue;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.text("You clicked the Blue Crystal!");
});

$("#crystal-green").click(function() {
    console.log("You clicked the Green Crystal");
    totalScore += crystalGreen;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.empty();
    actionText.text("You clicked the Green Crystal!");
});

$("#crystal-red").click(function() {
    console.log("You clicked the Red Crystal");
    totalScore += crystalRed;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.empty();
    actionText.text("You clicked the Red Crystal!");
});

$("#crystal-yellow").click(function() {
    console.log("You clicked the Yellow Crystal");
    totalScore += crystalYellow;
    totalScoreText.text(`Your total score is: ${totalScore}`);
    actionText.empty();
    actionText.text("You clicked the Yellow Crystal!");
});

// player wins if total score = random number
if (totalScore === targetNumber) {
        wins++;
        actionText.text("You win!");
        winsText.text(`Wins: ${wins}`);
    }

// player loses if total score > random number

// game restarts whenever player wins / loses. page does not refresh.