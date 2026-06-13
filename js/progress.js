const API_URL = "https://language-learning-backend-zstx.onrender.com";

const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

const userName = document.getElementById("userName");
const totalScore = document.getElementById("totalScore");
const streak = document.getElementById("streak");
const selectedLanguage = document.getElementById("selectedLanguage");
const totalWords = document.getElementById("totalWords");
const levelText = document.getElementById("levelText");
const progressFill = document.getElementById("progressFill");
const progressPercent = document.getElementById("progressPercent");

userName.innerText = user.full_name;
totalScore.innerText = user.total_score;
streak.innerText = user.streak;
selectedLanguage.innerText = user.selected_language;

function calculateLevel(score) {
  if (score >= 300) return "Advanced";
  if (score >= 150) return "Intermediate";
  return "Beginner";
}

function calculateProgress(score) {
  const maxScore = 300;
  let percent = Math.min((score / maxScore) * 100, 100);
  return Math.round(percent);
}

async function loadProgress() {
  const response = await fetch(
    `${API_URL}/vocabulary/${user.id}/${user.selected_language}`
  );

  const words = await response.json();

  totalWords.innerText = words.length;

  const level = calculateLevel(user.total_score);
  const percent = calculateProgress(user.total_score);

  levelText.innerText = level;
  progressFill.style.width = `${percent}%`;
  progressPercent.innerText = `${percent}% Completed`;
}

loadProgress();