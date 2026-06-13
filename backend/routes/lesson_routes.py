from fastapi import APIRouter

router = APIRouter(prefix="/lessons", tags=["Lessons"])

vocabulary_data = {
    "English": [
        {"word": "Apple", "meaning": "A fruit", "example": "I eat an apple daily."},
        {"word": "Book", "meaning": "A set of written pages", "example": "This is my English book."},
        {"word": "Learn", "meaning": "To gain knowledge", "example": "I learn new words daily."}
    ],
    "Hindi": [
        {"word": "पुस्तक", "meaning": "Book", "example": "मेरे पास एक पुस्तक है।"},
        {"word": "फल", "meaning": "Fruit", "example": "सेब एक फल है।"},
        {"word": "सीखना", "meaning": "To learn", "example": "मैं रोज़ सीखता हूँ।"}
    ],
    "Spanish": [
        {"word": "Hola", "meaning": "Hello", "example": "Hola, ¿cómo estás?"},
        {"word": "Libro", "meaning": "Book", "example": "Este es mi libro."},
        {"word": "Gracias", "meaning": "Thank you", "example": "Gracias por ayudarme."}
    ],
    "French": [
        {"word": "Bonjour", "meaning": "Hello", "example": "Bonjour, mon ami."},
        {"word": "Livre", "meaning": "Book", "example": "Ceci est mon livre."},
        {"word": "Merci", "meaning": "Thank you", "example": "Merci beaucoup."}
    ]
}


@router.get("/{language}")
def get_lessons(language: str):
    return vocabulary_data.get(language, [])