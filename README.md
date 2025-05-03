
Repository Structure

Oracle69_HumanCore/
│
├── backend/
│   ├── app.py
│   ├── auth.py
│   ├── chatbot.py
│   ├── speech_to_text.py
│   ├── grammar_check.py
│   ├── plagiarism_check.py
│   ├── content_generator.py
│   ├── document_handler.py
│   ├── utils/
│   │   ├── api_clients.py
│   │   └── text_processing.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── VoiceInput.jsx
│   │   │   ├── Editor.jsx
│   │   │   ├── FileUpload.jsx
│   │   │   └── Settings.jsx
│   │   └── api/
│   │       └── api.js
│   └── package.json
│
├── config/
│   ├── .env.example
│   ├── gunicorn_config.py
│   └── nginx.conf
│
├── README.md
└── run.sh


---

README.md (Oracle69 HumanCore)

# Oracle69 HumanCore

**Oracle69 HumanCore** is an intelligent, human-like content and communication platform. It empowers users to generate, humanize, and refine content using AI tools with real-time grammar correction, plagiarism detection, and multi-mode input.

---

## Features

- Secure User Authentication (JWT)
- Real-Time AI Chat (WebSocket)
- Voice-to-Text AI interaction
- Plagiarism Detection (choose API: Copyscape, PlagScan, etc.)
- Grammar Correction (LanguageTool, Ginger, ProWritingAid, etc.)
- Human-Like Content Rewriting
- Document Upload (PDF/DOCX/TXT) + Text Extraction
- Short-Form & Long-Form Content Generator
- API Toggle: External/Internal Content Generator
- Dashboard & Custom Settings
- File/Clipboard Input Options

---

## Tech Stack

- **Backend**: Flask, Flask-SocketIO, JWT, External API integrations
- **Frontend**: React.js, Web Speech API, Axios
- **Deployment**: Gunicorn, NGINX, Docker (optional), Vercel/Netlify (frontend)

---

## Setup Instructions

### 1. Backend Setup

```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python app.py

2. Frontend Setup

cd frontend
npm install
npm start

3. Deployment

# Backend
gunicorn -w 4 -b 0.0.0.0:8000 app:app

# Frontend (Production)
npm run build
vercel deploy  # or netlify deploy


---

Environment Variables

Copy .env.example to .env and provide:

SECRET_KEY=your_secret_key
OPENAI_API_KEY=xxx
COPYSCOPE_API_KEY=xxx
LANGUAGETOOL_API_KEY=xxx
...


---

License

MIT License © Oracle69
