const API_URL = "https://language-learning-backend-zstx.onrender.com";

const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

const language = user.selected_language;
const languageName = document.getElementById("languageName");
const lessonContainer = document.getElementById("lessonContainer");
const vocabForm = document.getElementById("vocabForm");
const message = document.getElementById("message");
const searchInput = document.getElementById("searchInput");

let vocabularyList = [];

languageName.innerText = language;

async function loadVocabulary() {
  const response = await fetch(`${API_URL}/vocabulary/${user.id}/${language}`);
  vocabularyList = await response.json();
  displayVocabulary(vocabularyList);
}

function displayVocabulary(words) {
  lessonContainer.innerHTML = "";

  if (words.length === 0) {
    lessonContainer.innerHTML = "<p>No vocabulary found. Add your first word.</p>";
    return;
  }

  words.forEach((item) => {
    lessonContainer.innerHTML += `
      <div class="lesson-card">
        <h2>${item.word}</h2>
        <p><span>Meaning:</span> ${item.meaning}</p>
        <p><span>Example:</span> ${item.example}</p>
        <button class="delete-btn" onclick="deleteWord(${item.id})">
          Delete
        </button>
      </div>
    `;
  });
}

vocabForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const word = document.getElementById("word").value;
  const meaning = document.getElementById("meaning").value;
  const example = document.getElementById("example").value;

  const response = await fetch(`${API_URL}/vocabulary/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      word,
      meaning,
      example,
      language,
      user_id: user.id
    })
  });

  if (response.ok) {
    message.innerText = "Word added successfully ✅";
    vocabForm.reset();
    loadVocabulary();
  } else {
    message.innerText = "Failed to add word";
  }
});

async function deleteWord(id) {
  const response = await fetch(`${API_URL}/vocabulary/${id}`, {
    method: "DELETE"
  });

  if (response.ok) {
    loadVocabulary();
  }
}

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();

  const filteredWords = vocabularyList.filter((item) =>
    item.word.toLowerCase().includes(searchValue) ||
    item.meaning.toLowerCase().includes(searchValue)
  );

  displayVocabulary(filteredWords);
});

loadVocabulary();