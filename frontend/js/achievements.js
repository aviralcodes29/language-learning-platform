const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

const userName = document.getElementById("userName");
const totalScore = document.getElementById("totalScore");
const badgeGrid = document.getElementById("badgeGrid");

userName.innerText = user.full_name;
totalScore.innerText = user.total_score;

const badges = [
  {
    title: "Beginner",
    icon: "🌱",
    requiredScore: 0,
    description: "Started your learning journey"
  },
  {
    title: "Active Learner",
    icon: "🔥",
    requiredScore: 50,
    description: "Reached 50 XP score"
  },
  {
    title: "Quiz Master",
    icon: "🧠",
    requiredScore: 100,
    description: "Reached 100 XP score"
  },
  {
    title: "Language Champion",
    icon: "🏆",
    requiredScore: 200,
    description: "Reached 200 XP score"
  },
  {
    title: "Pro Learner",
    icon: "🚀",
    requiredScore: 300,
    description: "Reached 300 XP score"
  }
];

badges.forEach((badge) => {
  const unlocked = user.total_score >= badge.requiredScore;

  badgeGrid.innerHTML += `
    <div class="badge-card ${unlocked ? "unlocked" : "locked"}">
      <div class="badge-icon">${badge.icon}</div>
      <h3>${badge.title}</h3>
      <p>${badge.description}</p>
      <p>${unlocked ? "Unlocked ✅" : `Locked 🔒 ${badge.requiredScore} XP required`}</p>
    </div>
  `;
});