from pydantic import BaseModel, EmailStr


class UserRegister(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    selected_language: str
    total_score: int
    streak: int

    class Config:
        from_attributes = True


class VocabularyCreate(BaseModel):
    word: str
    meaning: str
    example: str
    language: str
    user_id: int


class VocabularyResponse(BaseModel):
    id: int
    word: str
    meaning: str
    example: str
    language: str
    user_id: int

    class Config:
        from_attributes = True