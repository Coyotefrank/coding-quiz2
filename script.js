var quizContainer =document.getElementById('quiz');
var submitButton =document.getElementById('AnswerBtn');
var resultContainer = document.getElementById('results');

function showResults(){
    var questions = quizContainer.getElementsByClassName('qustions');
    var score = 0;

    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        var selectedOption = question.querySelector('input[type="radio"]:checked');

        if (selectedOption) {
            if (selectedOption.value === "a") {
              score++;
            }
          }
        }
    

    resultContainer.innerHTML = 'You scored ' + score + ' out of ' + questions.length;}

    submitButton.addEventListener('click', showResults);
