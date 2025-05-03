from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from . import db

class History(db.Model):
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, nullable=False)
    action_type = Column(String(80), nullable=False)
    date_created = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<History {self.user_id}, {self.action_type}>'
