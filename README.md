# 🚀 LangLearn - Full Stack Language Learning Platform

LangLearn is a modern full-stack language learning web application built using HTML, CSS, JavaScript, FastAPI, and SQLite. It helps users learn languages through vocabulary management, quizzes, achievements, progress tracking, and leaderboard competition.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* Password Hashing using Passlib & Bcrypt
* Session Management
* Logout Functionality

### 🌍 Language Learning

* Language Selection
* Vocabulary Management
* Add Vocabulary Words
* Search Vocabulary
* Delete Vocabulary
* Language-Specific Learning

### 🧠 Quiz System

* Vocabulary-Based Quiz
* Multiple Choice Questions
* Score Calculation
* XP System

### 📈 Progress Tracking

* Total Score Tracking
* Learning Level Detection
* Progress Bar
* Vocabulary Statistics

### 🏆 Achievements & Badges

* Beginner Badge
* Active Learner Badge
* Quiz Master Badge
* Language Champion Badge
* Pro Learner Badge

### 🥇 Leaderboard

* Global Ranking System
* Score-Based Ranking
* Competitive Learning Experience

### 👤 User Profile

* User Information
* Avatar Generation
* Score Tracking
* Streak Tracking
* Logout

### 🎨 UI Features

* Responsive Design
* Dark Mode
* Light Mode
* Mobile Friendly Interface

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Python
* FastAPI
* SQLAlchemy

### Database

* SQLite

### Tools

* VS Code
* Git
* GitHub

---

## 📁 Project Structure

```text
LangLearn/
│
├── index.html
├── login.html
├── register.html
├── dashboard.html
├── lessons.html
├── quiz.html
├── progress.html
├── leaderboard.html
├── profile.html
├── achievements.html
│
├── css/
│   ├── style.css
│   ├── auth.css
│   ├── dashboard.css
│   ├── lessons.css
│   ├── quiz.css
│   ├── progress.css
│   ├── leaderboard.css
│   ├── profile.css
│   ├── achievements.css
│   └── theme.css
│
├── js/
│   ├── auth.js
│   ├── dashboard.js
│   ├── lessons.js
│   ├── quiz.js
│   ├── progress.js
│   ├── leaderboard.js
│   ├── profile.js
│   ├── achievements.js
│   └── theme.js
│
├── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── auth.py
│   ├── requirements.txt
│   │
│   └── routes/
│       ├── user_routes.py
│       ├── language_routes.py
│       ├── lesson_routes.py
│       ├── vocabulary_routes.py
│       ├── quiz_routes.py
│       └── leaderboard_routes.py
│
├── .gitignore
└── README.md
```

---

## ⚙️ Backend Setup

### Create Virtual Environment

```bash
cd backend

python -m venv venv
```

### Activate Virtual Environment

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run Backend Server

```bash
python -m uvicorn main:app --reload
```

Backend URL:

```text
http://127.0.0.1:8000
```

Swagger Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 💻 Frontend Setup

Open the project using VS Code.

Run:

```text
Live Server
```

Open:

```text
index.html
```

---

## 📌 Current Modules

* Authentication System
* Dashboard
* Language Selection
* Vocabulary CRUD
* Quiz System
* Progress Tracking
* Achievements & Badges
* Leaderboard
* User Profile
* Dark / Light Theme

---

## 🚀 Future Enhancements

* Daily Streak System
* Grammar Lessons
* Better Quiz Engine
* AI Chat Tutor
* Voice Pronunciation
* Certificate Generator
* Admin Dashboard

---

## 🌐 Deployment

### Frontend

GitHub Pages

### Backend

Render

### Database

SQLite (Current)

PostgreSQL (Future Upgrade)

---

## 📊 Project Status

**Current Completion: ~90%**

LangLearn demonstrates full-stack development skills including frontend development, backend API development, database management, authentication, responsive UI design, REST APIs, and user engagement systems.

---

## 👨‍💻 Author

**Aviral Singh**

B.Tech CSE (AI & ML)

Frontend Developer | Full Stack Learner | Python Enthusiast

GitHub: https://github.com/Aviralcodes29
