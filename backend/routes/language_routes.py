from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import User

router = APIRouter(
    prefix="/language",
    tags=["Language"]
)

@router.put("/{user_id}")
def update_language(
    user_id: int,
    language: str,
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id == user_id
    ).first()

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    user.selected_language = language

    db.commit()

    return {
        "message": "Language Updated",
        "language": language
    }