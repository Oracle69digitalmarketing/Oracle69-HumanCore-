import React from 'react';

function GrammarSettings({ onSelectAPI }) {
    return (
        <div>
            <h3>Select Grammar API</h3>
            <select onChange={(e) => onSelectAPI(e.target.value)}>
                <option value="languageTool">LanguageTool</option>
                <option value="ginger">Ginger</option>
                <option value="microsoft">Microsoft</option>
            </select>
        </div>
    );
}

export default GrammarSettings;
