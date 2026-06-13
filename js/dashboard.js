const API_URL = "http://127.0.0.1:8000";

const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

const userName = document.getElementById("userName");
const totalScore = document.getElementById("totalScore");
const streak = document.getElementById("streak");
const selectedLanguage = document.getElementById("selectedLanguage");
const logoutBtn = document.getElementById("logoutBtn");
const languageCards = document.querySelectorAll(".language-card");

userName.innerText = user.full_name;
totalScore.innerText = user.total_score;
streak.innerText = user.streak;
selectedLanguage.innerText = user.selected_language;

languageCards.forEach((card) => {
  if (card.dataset.language === user.selected_language) {
    card.classList.add("selected");
  }

  card.addEventListener("click", async () => {
    const language = card.dataset.language;

    const response = await fetch(`${API_URL}/language/${user.id}?language=${language}`, {
      method: "PUT"
    });

    const data = await response.json();

    if (response.ok) {
      selectedLanguage.innerText = language;
      user.selected_language = language;
      localStorage.setItem("user", JSON.stringify(user));

      languageCards.forEach((item) => item.classList.remove("selected"));
      card.classList.add("selected");

      alert("Language Updated ✅");
    } else {
      alert(data.detail || "Something went wrong");
    }
  });
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "login.html";
});