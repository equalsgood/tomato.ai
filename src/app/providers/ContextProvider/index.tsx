import { createContext, ReactNode, useState } from 'react';

export interface ContextSchema {
    screenWidth: number,
    onResize: (width: number) => void;
}

const defaultValue: ContextSchema = {
    screenWidth: 1440,
    onResize: (width) => {},
};

export const Context = createContext(defaultValue);

interface ContextProviderProps {
    children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [screenWidth, setScreenWidth] = useState(1440);

    const resizeHandler = (width: number) => {
        console.log(width);
        setScreenWidth(width);
    };

    const contextValue: ContextSchema = {
        screenWidth,
        onResize: resizeHandler
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};