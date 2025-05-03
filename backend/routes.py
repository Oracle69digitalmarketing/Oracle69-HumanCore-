from .grammar_check import grammar_bp
from .plagiarism_check import plagiarism_bp
from .content_generator import content_bp
from .document_handler import doc_bp

def register_routes(app):
    app.register_blueprint(grammar_bp)
    app.register_blueprint(plagiarism_bp)
    app.register_blueprint(content_bp)
    app.register_blueprint(doc_bp)
