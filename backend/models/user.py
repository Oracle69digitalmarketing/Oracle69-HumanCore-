from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from . import db

class User(db.Model):
    id = Column(Integer, primary_key=True)
    username = Column(String(80), unique=True, nullable=False)
    password_hash = Column(String(120), nullable=False)
    date_created = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.username}>'
