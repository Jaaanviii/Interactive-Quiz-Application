const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "HighText Machine Language", "Hyper Tabular Markup Language", "None of these"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "JQuery", "Django", "NodeJS"],
    answer: "Django"
  },
  {
    question: "Which is used for Connect To Database?",
    options: ["PHP", "HTML", "JS", "All"],
    answer: "PHP"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(opt);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-box").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${questions.length}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

loadQuestion();
