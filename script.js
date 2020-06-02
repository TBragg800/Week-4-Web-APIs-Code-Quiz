//variables to select start button and access questions
// questions array/object  
// addEventListeners on buttons
// functions for start of quiz, next question and selecting answer

var start1 = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var buttonShow = document.getElementById("buttons");
var showScore = document.getElementById("score/time-btns");
var score = 0;
var randomQues;
var CurrentQues;
var randomAnswer;
var questionEl = document.getElementById("question");
var buttonEl1 = document.getElementById("btn1");
var buttonEl2 = document.getElementById("btn2");
var buttonEl3 = document.getElementById("btn3");
var buttonEl4 = document.getElementById("btn4");
var userChoices = document.getElementById("buttons");

start1.addEventListener("click", startQuiz);


function startQuiz() {
    start1.classList.add("d-none");
    buttonShow.classList.remove("d-none");
    showScore.classList.remove("d-none");
    randomQues = questionsArray.sort(() => Math.random() - .5);
    CurrentQues = 0;
    nextQuestion();
}

function nextQuestion() {
showNextQuestion(randomQues[CurrentQues])
showNextButtons(CurrentQues)
}

function showNextQuestion (question) {
    questionEl.innerText = question.question;

}

function showNextButtons (answers) {
    buttonEl1.innerHTML = answers

}

function selectAnswer() {

}

var questionsArray = [
    {
        question: "What is 2 + 2", 
        answers: [
            { text: "4", correct: false},
            { text: "22", correct: false},
            { text: "45", correct: false},
            { text: "451", correct: false}
        ]
    },
    {
        question: "What is 3 + 3", 
        answers: [
          { text: "14", correct: false},
          { text: "22", correct: false},
          { text: "2", correct: false},
          { text: "6", correct: true}
        ]
    },
    {
        question: "What is 22 + 22", 
        answers: [
          { text: "4", correct: false},
          { text: "22", correct: false},
          { text: "44", correct: true},
          { text: "24", correct: false}
        ]
    },
    {
        question: "What is 2 + 9", 
        answers: [
          { text: "whatever man", correct: false},
          { text: "11", correct: true},
          { text: "22", correct: false},
          { text: "7", correct: false}

        ]
    },
    {
        question: "What is 2 - 9", 
        answers: [
          { text: "7", correct: true},
          { text: "0", correct: false},
          { text: "31", correct: false},
          { text: "8", correct: false}
        ]
    },
    {
        question: "What is 2 * 9", 
        answers: [
          { text: "7 + 11", correct: true},
          { text: "0", correct: false},
          { text: "18", correct: true},
          { text: "8", correct: false}
        ]
    }

]



// function() 
//     { questionsArray.sort(Math.random() - .5);
//     }