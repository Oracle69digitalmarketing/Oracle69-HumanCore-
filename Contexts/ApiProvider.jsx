import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export function ApiProvider({ children }) {
    const [selectedApi, setSelectedApi] = useState('languageTool');

    const changeApi = (api) => {
        setSelectedApi(api);
    };

    return (
        <ApiContext.Provider value={{ selectedApi, changeApi }}>
            {children}
        </ApiContext.Provider>
    );
}
