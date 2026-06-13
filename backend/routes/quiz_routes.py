from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db
from models import User

router = APIRouter(prefix="/quiz", tags=["Quiz"])


@router.put("/score/{user_id}")
def update_score(user_id: int, score: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user.total_score += score
    db.commit()
    db.refresh(user)

    return {
        "message": "Score updated successfully",
        "total_score": user.total_score
    }