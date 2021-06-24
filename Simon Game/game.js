
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started=false;

var level=0;

//to start game
$(document).keypress(function() {

  if(!started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

//to restart the game
function startOver() {

  started = false;

  level = 0;

  gamePattern = [];

  userClickedPattern = [];
}

//mouse clicks by user
$(".btn").click(function() {

    var userChosenColor = $(this).attr('id');

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

//verify answer
function checkAnswer(currentLevel) {

  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    console.log("success");

    if(userClickedPattern.length === gamePattern.length) {

      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  }
  else {

    console.log("failure");

    playSound("wrong");

    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over! Press any key to Restart.");

    startOver();

  }
}

//generating random sequence
function nextSequence() {

  userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColor = buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  // adding animations
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  //adding sounds
  playSound(randomChosenColor);

}

//to play sounds
function playSound(name) {

  var audio=new Audio("sounds/" + name + ".mp3");
  audio.play();

}

//to add animation when a button is pressed
function animatePress(currentColor) {

  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);

}
