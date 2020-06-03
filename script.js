
var start1 = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var userChoices = document.getElementById("buttons");
var showScore = document.getElementById("score/time-btns");
var score = 0;
var randomQues;
var CurrentQues;
var questionEl = document.getElementById("question");
document.getElementById("myScore").append(score);
var totalSeconds = 60;
var cSeconds = parseInt(totalSeconds%60);


start1.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
    CurrentQues++;
    NextQuestion();
});

function startQuiz() {
    start1.classList.add("d-none");
    userChoices.classList.remove("d-none");
    showScore.classList.remove("d-none");
    randomQues = questions.sort(() => Math.random() - .5);
    CurrentQues = 0;
    NextQuestion();
}

function checkTime() {
    document.getElementById("quiz-time-left").innerHTML = cSeconds;
    if (totalSeconds <= 0) {
        setTimeout("document.quiz.submit()", 1);
    } else {
        totalSeconds = totalSeconds - 1;
        cSeconds = parseInt(totalSeconds%60);
        setTimeout("checkTime()", 1000);
    } 
}
setTimeout("checkTime()", 1000);

function NextQuestion() {
    reset();
showQuestion(randomQues[CurrentQues]);
}

function showQuestion (question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("row");
        button.classList.add("btn");
        button.classList.add("btn-secondary");
        button.classList.add("btn-lg");
        button.classList.add("m-4");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        userChoices.appendChild(button);
    });
}

function reset() {
    nextBtn.classList.add("d-none");
    while (userChoices.firstChild) {
        userChoices.removeChild(userChoices.firstChild);
    }
}

function selectAnswer(e) {
 var selectedButton = e.target;
 var correct = selectedButton.dataset.correct;
 setStatusClass(document.body, correct);
 Array.from(userChoices.children).forEach(button => {
     setStatusClass(button, button.dataset.correct);
 });
 if(randomQues.length > CurrentQues + 1) {
    nextBtn.classList.remove("d-none");
 } else {
     start1.innerText = "restart";
     start1.classList.remove("d-none");
     totalSeconds = 60;
 }
 
}

function setStatusClass(element, correct) {
    clear(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
        totalSeconds = cSeconds - 5;
    }
}

function clear(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
} 


var questions = [
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?", 
        answers: [
            { text: "The User's machine running a Web browse", correct: true},
            { text: "The Web server", correct: false},
            { text: "The T'1000! It's CPU is a neural net processor; A learning a computer.", correct: false},
            { text: "None of the above", correct: false}
        ]
    },
    {
        question: "What should appear at the very end of your JavaScript?", 
        answers: [
          { text: "Your email address.", correct: false},
          { text: "The number 22.", correct: false},
          { text: "The <script>", correct: false},
          { text: "The </script>", correct: true}
        ]
    },
    {
        question: "What is the correct JavaScript syntax to write 'Hello World'?", 
        answers: [
          { text: "BillO'Reilly.print('We'll do it live!')", correct: false},
          { text: "innerHtml.print('Hello World')", correct: false},
          { text: "document.write('Hello World')", correct: true},
          { text: "response.write('Hello World')", correct: false}
        ]
    },
    {
        question: "Which is the correct way to write a JavaScript array?", 
        answers: [
          { text: "Whatever man!", correct: false},
          { text: "var noWay = new Array('Nope','Not','This', 'One')", correct: true},
          { text: "var txt = new Array='half','full','empty", correct: false},
          { text: "var txt.new Array('half','full','empty')", correct: false}

        ]
    },
    {
        question: "The _______ method of an Array object adds and/or removes elements from an array.", 
        answers: [
          { text: "Splice", correct: true},
          { text: "remove.it", correct: false},
          { text: "goaway()", correct: false},
          { text: "slice", correct: false}
        ]
    },
    {
        question: "The syntax of capture events method for document object is ______________.", 
        answers: [
          { text: "captureEvents.eventType", correct: false},
          { text: "Events(capture.eventType)", correct: false},
          { text: "captureEvents(eventType)", correct: true},
          { text: "captureEvents()", correct: false}
        ]
    },
    {
        question: "What are variables used for in JavaScript Programs?", 
        answers: [
          { text: "Storing numbers, dates, or other values", correct: true},
          { text: "Varying randomly", correct: false},
          { text: "All of the above", correct: false},
          { text: "None of the above", correct: false}
        ]
    },
    {
        question: "What does 'x=4+'4';' output?", 
        answers: [
          { text: "44", correct: true},
          { text: "undefined", correct: false},
          { text: "eight", correct: true},
          { text: "8", correct: false}
        ]
    }

];

