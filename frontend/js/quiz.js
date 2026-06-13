const API_URL = "http://127.0.0.1:8000";

const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

let vocabulary = [];
let currentQuestion = 0;
let score = 0;

async function loadVocabulary() {
  const response = await fetch(
    `${API_URL}/vocabulary/${user.id}/${user.selected_language}`
  );

  vocabulary = await response.json();

  if (vocabulary.length < 2) {
    question.innerText = "Add at least 2 vocabulary words to start quiz.";
    nextBtn.style.display = "none";
    return;
  }

  showQuestion();
}

function showQuestion() {
  result.innerText = "";
  options.innerHTML = "";

  const item = vocabulary[currentQuestion];

  question.innerText = `What is the meaning of "${item.word}"?`;

  const correctAnswer = item.meaning;

  let optionList = vocabulary.map((v) => v.meaning);
  optionList = optionList.sort(() => Math.random() - 0.5);

  optionList.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.innerText = option;

    button.addEventListener("click", () => {
      checkAnswer(option, correctAnswer);
    });

    options.appendChild(button);
  });
}

function checkAnswer(selected, correct) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn) => (btn.disabled = true));

  if (selected === correct) {
    score += 10;
    result.innerText = "Correct ✅ +10 XP";
  } else {
    result.innerText = `Wrong ❌ Correct answer: ${correct}`;
  }

  scoreText.innerText = score;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion >= vocabulary.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
});

async function finishQuiz() {
  question.innerText = "Quiz Completed 🎉";
  options.innerHTML = "";
  result.innerText = `Final Score: ${score}`;

  nextBtn.style.display = "none";

  const response = await fetch(
    `${API_URL}/quiz/score/${user.id}?score=${score}`,
    {
      method: "PUT"
    }
  );

  const data = await response.json();

  if (response.ok) {
    user.total_score = data.total_score;
    localStorage.setItem("user", JSON.stringify(user));
  }
}

loadVocabulary();