const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

const avatar = document.getElementById("avatar");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const selectedLanguage = document.getElementById("selectedLanguage");
const totalScore = document.getElementById("totalScore");
const streak = document.getElementById("streak");
const logoutBtn = document.getElementById("logoutBtn");

avatar.innerText = user.full_name.charAt(0).toUpperCase();
fullName.innerText = user.full_name;
email.innerText = user.email;
selectedLanguage.innerText = user.selected_language;
totalScore.innerText = user.total_score;
streak.innerText = user.streak;

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});