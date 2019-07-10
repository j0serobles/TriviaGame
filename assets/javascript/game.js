// GLOBALS:global variables

//Force the current theme.
//TODO: Implement user-selectable themes.

var currentTheme = triviaQuestions[0];

///////////////////////////////////////////////////////////////////////////
// Constructor for UI object
// The UI object has all the attributes and methods
// for handling the HTML page. 
// It is used by the Game() object whenever the HTML elements
// need to be updated. 
///////////////////////////////////////////////////////////////////////////
function UI() { 

  ////////////////////////////////
  // Attributes:
  ////////////////////////////////
  this.currentQuestionIndex = 0;    // Index of the trivia question being asked.
  this.statsDiv              = document.getElementById("stats_div");
  
  //Sounds  
  this.wrongGuess            = document.getElementById("wrong"); 
  this.correctGuess          = document.getElementById("ding"); 
  this.tada                  = document.getElementById("tada"); 
  this.lost                  = document.getElementById("lost"); 

  ////////////////////////////////
  // Methods
  ////////////////////////////////
 
  this.updatePageElements = function() {

    if (currentGame.gameState === "ended") { 
      $("#stats_div").html('<h2 class="text-center">Total Correct: '          + currentGame.totalCorrect    +
                           '</h2> <h2 class="text-center">Total Incorrect: '  + currentGame.totalIncorrect  + 
                           '</h2> <h2 class="text-center">Total Unanswered: ' + currentGame.totalUnanswered +
                           '</h2>');
      $("#current_question").html('<h2  class="text-center"> Game Ended. </h2> ');
    }
    else if (currentGame.gameState === "started") {

       $("#current_question").html('<h2  class="text-center"> Question : ' + 
                                   currentTheme.questions[currentGame.currentQuestionIndex].questionText + '</h2> ');
       //Display each answer in its div element
       $("#answer1").html =('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"' +
                            'value="Answer1"><label class="form-check-label" for="exampleRadios1">'                 +
                            currentTheme.questions[currentGame.currentQuestionIndex][0]                             +
                             '</label>');
      $("#answer2").html =('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"' +
                            'value="Answer1"><label class="form-check-label" for="exampleRadios1">'                +
                            currentTheme.questions[currentGame.currentQuestionIndex][1]                            +
                            '</label>');
      $("#answer3").html =('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"' +
                          'value="Answer1"><label class="form-check-label" for="exampleRadios1">'                  +
                          currentTheme.questions[currentGame.currentQuestionIndex][2]                              +
                           '</label>');
        $("#answer4").html =('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"' +
                            'value="Answer1"><label class="form-check-label" for="exampleRadios1">'                  +
                            currentTheme.questions[currentGame.currentQuestionIndex][3]                              +
                            '</label>');
                    
    }
  }

  this.showQuestion = function() {

    // document.getElementById("answer1").enabled=true;
    // document.getElementById("answer2").enabled=true;
    // document.getElementById("answer3").enabled=true;
    // document.getElementById("answer4").enabled=true;

    //Remove background color from correct answer

    $("#answer1").removeClass("bg-success"); 
    $("#answer2").removeClass("bg-success");
    $("#answer3").removeClass("bg-success");
    $("#answer4").removeClass("bg-success");

    $("#answer1").removeClass("bg-danger"); 
    $("#answer2").removeClass("bg-danger");
    $("#answer3").removeClass("bg-danger");
    $("#answer4").removeClass("bg-danger");


    $("#answers_form").show();
    $("#answers_form").removeClass("invisible");
    $("#answers_form").addClass("visible");

    $("#current_question").removeClass("invisible");
    $("#current_question").addClass("visible");
    
    $("#time_remaining").removeClass("invisible");
    $("#time_remaining").addClass("visible");

    $("#start_button").removeClass("visible");
    $("#start_button").addClass("invisible");

    $("#stats_div").removeClass("visible"); 
    $("#stats_div").addClass("invisible"); 

    $("#current_question").html('<h2  class="text-center"> Question : ' + 
    currentTheme.questions[currentGame.currentQuestionIndex].questionText + '</h2> ');
    //Display each answer in its div element
    $("#answer1").html('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"><label class="form-check-label" for="exampleRadios1">' +
    currentTheme.questions[currentGame.currentQuestionIndex].questionOptions[0]                             +
    '</label>');
    $("#answer2").html('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" <label class="form-check-label" for="exampleRadios2">' +
    currentTheme.questions[currentGame.currentQuestionIndex].questionOptions[1]                            +
    '</label>');
    $("#answer3").html('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" <label class="form-check-label" for="exampleRadios3">' +
    currentTheme.questions[currentGame.currentQuestionIndex].questionOptions[2]                              +
    '</label>');
    $("#answer4").html('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4"> <label class="form-check-label" for="exampleRadios4">'+
    currentTheme.questions[currentGame.currentQuestionIndex].questionOptions[3]                              +
    '</label>');


    
  }

  this.showAnswer = function() {

    //Display correct answer in a green background.

    var correctAnswerDiv = "#answer" + currentTheme.questions[currentGame.currentQuestionIndex].correctAnswer;
    $(correctAnswerDiv).addClass("bg-success"); 

  }

  //////////////////////////////////////////////////////////////////////////////////////
  this.showStats = function() {

      if (currentGame.gameState === "ended") { 
        $("#stats_div").html('<h2 class="text-center">Total Correct: '          + currentGame.totalCorrect    +
                            '</h2> <h2 class="text-center">Total Incorrect: '  + currentGame.totalIncorrect  + 
                            '</h2> <h2 class="text-center">Total Unanswered: ' + currentGame.totalUnanswered +
                            '</h2>');

        $("#current_question").html('<h2  class="text-center"> Game Ended. </h2> ');
     
        $("#answers_form").hide(); 
     
        $("#stats_div").removeClass("invisible"); 
        $("#stats_div").addClass("visible"); 

              //Hide the "start" button
      $("#start_button").removeClass("invisible");
      $("#start_button").addClass("visible");
      $("#start_button").text("Start again");
      }
  }

  ///////////////////////////////////////////////////////////////////////////////
  // called every second during an active question to update the time remaining. 
  ///////////////////////////////////////////////////////////////////////////////
  this.refreshCountdown = function() { 

    $("#time_remaining").html("Time Remaining : " + currentGame.timeRemaining + " seconds."); 
  
  }


}























///////////////////////////////////////////////////////////////////////////
// Constructor for Game object.
// The Game() object has the attributes and methods needed
// for playing the Word-Guess game.  Its constructor gets passed a 
// theme[] global array.
// (This version only uses one theme)
// Pressing any key starts the game and subsequent key presses call the
// playGame() function to match the entered key to a letter in the secret
// word selected by the computer randomly. 
///////////////////////////////////////////////////////////////////////////
function Game(theme) {

  /////////////////////////
  // Attributes:
  /////////////////////////
  this.timeRemaining   = 10; //Default time remaining starts at 30 seconds.
  this.gameState       = "notStarted"
  this.currentTheme    = theme;
  this.currentQuestionIndex = -1;

  this.gamesPlayed    = 0;  // How many games have been played
  this.wins           = 0;  // How many wins
  this.losses         = 0;  // How many losses
  

  this.totalCorrect    = 0;
  this.totalIncorrect  = 0;
  this.totalUnanswered = 0;

  /////////////////////////
  // Methods:
  /////////////////////////

  // /////////////////////////////////////////////////////////////////////////////
  // // playGame gets called when a new question is posed, and waits for input. 
  // /////////////////////////////////////////////////////////////////////////////
  //   this.playGame = function(theGame) {
 
  //   if (theGame.gameState === "ended") {
  //     //The game has ended, reset it and start a new one
  //     console.log("Game Ended");
  //   }
  //   else {

  //     if (theGame.gameState === "notStarted") {
  //       theGame.gameState = "started"; 
  //     }

  //     // Choose the next question:
  //     theGame.currentQuestionIndex++
  //     if (theGame.currentQuestionIndex === theGame.questions.length){
  //       //Last question has been displayed.  End this game.
  //       theGame.endTheGame();
  //     }
  //     else {
  //       //Still not reached the last question, continue.
  //       theGame.currentQuestion = currentTheme.questions[theGame.currentQuestionIndex++];
  //     }
      
  //     //Update interface
  //     // userInterface.updatePageElements();
  //     userInterface.showQuestion(); 
  //   }
    
  // }
  

  //////////////////////////////////////////////////////////////////////
  // endTheGame 
  // Ends the game, set state variable.
  /////////////////////////////////////////////////////////////////////
  this.endTheGame = function() {
    
    this.gameState = "ended";
  }
    
} // End of Game constructor




//CALLS:
/////////////////////////////////////////////////////////////////////////////////////////////
// When page is loaded, create the game and wait for a key input.



var currentGame   = null; 
var userInterface = null;
var currentTheme  = null; 
var gameInterval  = null;


////////////////////////////////////////////////////////////////////
$( document ).ready( function() { 

 currentTheme  = triviaQuestions[0]; // Use fixed theme, for now. 
 currentGame   = new Game(currentTheme); 
 userInterface = new UI(); 

 $("#answer1,#answer2,#answer3,#answer4").on("click", function() {
   //Hide the countdown 
   $("#time_remaining").removeClass("visible");
   $("#time_remaining").addClass("invisible");
   if (currentGame.gameState === "started") {   //Only do this during active game.
    currentGame.gameState = "paused";
    userInterface.showAnswer(); 
    if ($(this).attr("value") != currentGame.currentQuestion.correctAnswer) {
      currentGame.totalIncorrect++;
      $(this).addClass("bg-danger"); 
    }
    else {
      currentGame.totalCorrect++;
    }
    setTimeout(nextQuestion, 5000);
  }
 });
});

////////////////////////////////////////////////////////////////////
 function nextQuestion() {

    if (currentGame.gameState === "notStarted") {  //It is the first game played.
      currentGame.gameState = "started"; 
      gameInterval = setInterval(counter, 1000); 
      currentGame.currentQuestionIndex = -1;
      currentGame.totalCorrect    = 0;
      currentGame.totalIncorrect  = 0;
      currentGame.totalUnanswered = 0;
   }
   else if (currentGame.gameState === "paused") {
     currentGame.gameState = "started";
   }

  // Choose the next question:
  currentGame.currentQuestionIndex++
  if (currentGame.currentQuestionIndex === currentTheme.questions.length ){
    //Last question has been displayed.  End this game.
    clearInterval(gameInterval); 
    currentGame.endTheGame();
    userInterface.showStats();
  }
  else {
    //Still not reached the last question, continue.
    currentGame.currentQuestion = currentTheme.questions[currentGame.currentQuestionIndex]; 
    $("#time_remaining").removeClass("invisible");
    $("#time_remaining").addClass("visible");
     //Update interface
     userInterface.showQuestion(); 
     currentGame.timeRemaining = 15;
  }
  


 }
 ///////////////////////////////////////////////////////////////////
 function counter() { 

  currentGame.timeRemaining--;
  
  if ((currentGame.timeRemaining === 0)) {
    //timer expired and question was not answered.  
    // Increase the count of unanswered questions,
    // reset the timeRemaining back to 30 seconds  
    // and go to the next question after 5 seconds.
    $("#time_remaining").removeClass("visible");
    $("#time_remaining").addClass("invisible");  //Hide the countdown until next question.
    userInterface.showAnswer();
    currentGame.totalUnanswered++; 
    currentGame.timeRemaining = 15;
    setTimeout(nextQuestion, 1000);
  }
  else if (currentGame.timeRemaining > 0) {
    //Timer not expired. Refresh time remaining text.
    userInterface.refreshCountdown();
  }

 }