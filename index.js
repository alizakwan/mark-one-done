
var readlineSync = require('readline-sync');

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("you are right")
    score = score + 1
  } else {
    console.log("you are wrong")
  }
  console.log("Your score is: ", score)
}
function outro(){
  console.log('------------------');
  console.log("Your final Score:", score);
}


var questions = [
  {
    question: "what am i learning? ",
    answer: "javascript"
  },
  {
    question: "what is my name? ",
    answer: "Ali",
  },
  {
    question: "what is my age?",
    answer: "18",

  },
  {
    question:"where do i live?",
    answer:"Dhule",
  },
  {
    question: "which car do i like?",
    answer: "mustang",
  },
  {
    question: "which bike do i like?",
    answer: "interceptor 650"
  }
];

for (var i = 0; i < questions.length; i = i + 1) {
  play(questions[i].question, questions[i].answer);
}
outro()
