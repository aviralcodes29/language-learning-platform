from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import Vocabulary
from schemas import VocabularyCreate, VocabularyResponse

router = APIRouter(prefix="/vocabulary", tags=["Vocabulary"])


@router.post("/", response_model=VocabularyResponse)
def add_vocabulary(vocab: VocabularyCreate, db: Session = Depends(get_db)):
    new_word = Vocabulary(
        word=vocab.word,
        meaning=vocab.meaning,
        example=vocab.example,
        language=vocab.language,
        user_id=vocab.user_id
    )

    db.add(new_word)
    db.commit()
    db.refresh(new_word)

    return new_word


@router.get("/{user_id}/{language}")
def get_vocabulary(user_id: int, language: str, db: Session = Depends(get_db)):
    words = db.query(Vocabulary).filter(
        Vocabulary.user_id == user_id,
        Vocabulary.language == language
    ).all()

    return words


@router.delete("/{word_id}")
def delete_vocabulary(word_id: int, db: Session = Depends(get_db)):
    word = db.query(Vocabulary).filter(Vocabulary.id == word_id).first()

    if not word:
        raise HTTPException(status_code=404, detail="Word not found")

    db.delete(word)
    db.commit()

    return {"message": "Word deleted successfully"}