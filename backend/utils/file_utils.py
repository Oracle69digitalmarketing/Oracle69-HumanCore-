import requests

def call_openai_api(prompt):
    headers = {'Authorization': f"Bearer {OPENAI_API_KEY}"}
    data = {'prompt': prompt, 'max_tokens': 200}
    response = requests.post("https://api.openai.com/v1/completions", headers=headers, json=data)
    return response.json()

def call_grammar_api(text):
    url = f"https://api.grammarbot.io/v2/check?text={text}&lang=en"
    response = requests.post(url)
    return response.json()

def call_plagiarism_api(text):
    url = f"https://api.copyscape.com/v1/?text={text}&key={COPYSRCAPE_API_KEY}"
    response = requests.get(url)
    return response.json()
