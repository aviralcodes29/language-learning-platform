from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from models import Base
from routes import user_routes
from routes import language_routes
from routes import lesson_routes
from routes import vocabulary_routes
from routes import quiz_routes
from routes import leaderboard_routes

app = FastAPI(title="Language Learning Platform API")

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_routes.router)
app.include_router(language_routes.router)
app.include_router(lesson_routes.router)
app.include_router(vocabulary_routes.router)
app.include_router(quiz_routes.router)
app.include_router(leaderboard_routes.router)

@app.get("/")
def home():
    return {"message": "Language Learning Platform Backend is running..."}