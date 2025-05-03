import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your_default_secret_key')
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
    COPYSRCAPE_API_KEY = os.environ.get('COPYSRCAPE_API_KEY')
    GRAMMAR_API_KEY = os.environ.get('GRAMMAR_API_KEY')
    LANGUAGE_TOOL_API_KEY = os.environ.get('LANGUAGE_TOOL_API_KEY')
