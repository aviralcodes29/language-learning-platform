# LangLearn - Full Stack Language Learning Platform

LangLearn is a modern full-stack language learning web application built using HTML, CSS, JavaScript, Python FastAPI, and SQLite. The platform helps users learn new languages through vocabulary management, quizzes, progress tracking, achievements, and leaderboard competition.

---

## Features

### Authentication

* User Registration
* User Login
* Password Hashing
* Session Management
* Logout Functionality

### Dashboard

* Personalized User Dashboard
* Language Selection
* Learning Statistics
* Responsive User Interface

### Vocabulary Management

* Add Vocabulary Words
* Search Vocabulary
* Delete Vocabulary
* Language-Based Vocabulary Storage

### Quiz System

* Vocabulary-Based Quiz Generation
* Score Calculation
* XP Points System
* User Performance Tracking

### Progress Tracking

* Total Score Monitoring
* Learning Level Detection
* Vocabulary Count Tracking
* Progress Bar Visualization

### Achievements & Badges

* Beginner Badge
* Active Learner Badge
* Quiz Master Badge
* Language Champion Badge
* Pro Learner Badge

### Leaderboard

* Global Ranking System
* Score-Based Sorting
* User Competition

### Profile Management

* User Profile Page
* Language Information
* Score Tracking
* Avatar Generation

### UI Features

* Responsive Design
* Dark Mode
* Light Mode
* Mobile Friendly Layout

---

## Tech Stack

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

## Project Structure

```text
LangLearn
│
├── frontend
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── lessons.html
│   ├── quiz.html
│   ├── progress.html
│   ├── leaderboard.html
│   ├── profile.html
│   ├── achievements.html
│   │
│   ├── css
│   │   ├── style.css
│   │   ├── auth.css
│   │   ├── dashboard.css
│   │   ├── lessons.css
│   │   ├── quiz.css
│   │   ├── progress.css
│   │   ├── leaderboard.css
│   │   ├── profile.css
│   │   ├── achievements.css
│   │   └── theme.css
│   │
│   └── js
│       ├── auth.js
│       ├── dashboard.js
│       ├── lessons.js
│       ├── quiz.js
│       ├── progress.js
│       ├── leaderboard.js
│       ├── profile.js
│       ├── achievements.js
│       └── theme.js
│
├── backend
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── auth.py
│   ├── requirements.txt
│   │
│   └── routes
│       ├── user_routes.py
│       ├── language_routes.py
│       ├── lesson_routes.py
│       ├── vocabulary_routes.py
│       ├── quiz_routes.py
│       └── leaderboard_routes.py
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/LangLearn.git
cd LangLearn
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn main:app --reload
```

Backend Server:

```text
http://127.0.0.1:8000
```

Swagger API Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

Open the frontend folder using VS Code.

Run:

```text
Live Server
```

Open:

```text
frontend/index.html
```

---

## Current Modules

* Authentication System
* Dashboard
* Language Selection
* Vocabulary CRUD
* Quiz System
* Progress Tracking
* Leaderboard
* Profile Management
* Achievements & Badges
* Dark / Light Theme

---

## Future Enhancements

* Daily Streak System
* Grammar Lessons
* AI Chat Tutor
* Voice Pronunciation
* Certificate Generator
* Admin Dashboard
* Advanced Analytics
* Gamification Features

---

## Project Status

Current Completion: **90%+**

This project demonstrates full-stack development skills including frontend development, backend API development, database management, authentication, state management, and responsive UI design.

---

## Author

**Aviral Singh**

B.Tech CSE (AI & ML)

Frontend Developer | Full Stack Learner | Python Enthusiast
