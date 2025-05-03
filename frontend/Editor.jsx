import React, { useState } from 'react';
import axios from 'axios';

export default function Editor() {
  const [text, setText] = useState('');
  const [apiChoice, setApiChoice] = useState('language_tool');

  const handleCheck = async () => {
    const res = await axios.post('/check-grammar', { text, api: apiChoice });
    console.log(res.data);
  };

  return (
    <div>
      <textarea onChange={(e) => setText(e.target.value)} value={text} />
      <select onChange={(e) => setApiChoice(e.target.value)}>
        <option value="language_tool">LanguageTool</option>
        <option value="ginger">Ginger</option>
        <option value="prowritingaid">ProWritingAid</option>
      </select>
      <button onClick={handleCheck}>Check Grammar</button>
    </div>
  );
}
