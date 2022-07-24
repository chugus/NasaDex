import React, { createContext, useState } from 'react'

interface NumberContextProps {
    numberPage: number;
    setNumber: (number: number) => void;
}

export const PageContext = createContext({} as NumberContextProps);

export const PageProvider = ({ children }: any) => {

    const [numberPage, setNumberPage] = useState(1);

    const setNumber = () => {
        setNumberPage(numberPage + 1);
    }

    return (
        <PageContext.Provider value={{
            numberPage,
            setNumber,
        }}>
            {children}
        </PageContext.Provider>
    )
}
