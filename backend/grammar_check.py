from flask import Blueprint, request, jsonify
import requests
import os

grammar_bp = Blueprint('grammar', __name__)

@grammar_bp.route('/check-grammar', methods=['POST'])
def check_grammar():
    text = request.json.get('text')
    api = request.json.get('api')  # language_tool, ginger, etc.
    
    if api == "language_tool":
        response = requests.post("https://api.languagetoolplus.com/v2/check", data={
            'text': text,
            'language': 'en-US'
        })
        return jsonify(response.json())
    # Add others...
