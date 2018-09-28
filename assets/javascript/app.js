

$(document).on('click', '#start', function(){
    console.log("Start");
    game.startGame();

});


var randomQuestions = Math.floor(Math.random()*(questions));

var questions = [{
question: "Name the seventh planet from the sun?",
answers:["Uranus", "Jupiter", "Saturn", "Mars"],
correctAnswer: "Uranus",
}, {

question: "What colour jersey is worn by the winners of each stage of the Tour De France?",
answers: ["Green", "Red", "Yellow", "white"],
correctAnswer: "Yellow",
}, {

question:"In 2011, which country hosted a Formula 1 race for the first time?",
answers: ["USA", "India", "England", "Russia"],
correctAnswer: "India",
}, {

question: "How many valves does a trumpet have?",
answers: ["two", "three", "seven", "six"],
correctAnswer: "three",
}, {

question: "What is the diameter of Earth?",
answers: ["6000 miles", "8000 miles", "9000 miles","11000 miles"],
correctAnswer: "8000 miles",
}];


//game object

var game = {
correct:0,
incorrect:0,
counter:20,

countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);
    if (game.counter === 0){
    console.log('Times Up');
    game.timeUP();
}
},
startGame:function(){
    timer=setInterval(game.countdown, 1000);
    $('#start').remove();
    for (var i = 0; i < questions.length; i++) {
    $("#quiz").append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
    $("#quiz").append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);

     }
    }
},
timeUP:function() {
    clearInterval (timer);
    alert('Times Up!');

},
reset:function() {
location.reload();

},

done: function(){
    $.each($("imput[name='answer0']:checked"), function (){
        console.log("inside")
        if($(this).val() == questions[0].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
});
    
game.result();
},
     result:function(){
     clearInterval(timer);
     $("#quiz").empty();
     $("#quiz").append("Correct answers: " + game.correct + "<br/>");
     $("#quiz").append("Incorrect answers: " + game.incorrect);

     }
 }