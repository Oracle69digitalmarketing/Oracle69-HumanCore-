import { useState } from 'react';
import { useContext } from 'react';
import { ApiContext } from '../contexts/ApiProvider';

export const useGrammarCheck = () => {
    const [result, setResult] = useState(null);
    const { selectedApi } = useContext(ApiContext);

    const checkGrammar = async (text) => {
        let response;
        if (selectedApi === 'languageTool') {
            // Call LanguageTool API
        } else if (selectedApi === 'ginger') {
            // Call Ginger API
        }
        setResult(response);
    };

    return { result, checkGrammar };
};
