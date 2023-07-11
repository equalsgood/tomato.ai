import { createContext, ReactNode, useState } from 'react';

export interface ContextSchema {
    mobileBreakpoint: number,
    isMobile: boolean,
    screenWidth: number,
    onResize: (width: number) => void;
}

const defaultValue: ContextSchema = {
    isMobile: false,
    mobileBreakpoint: 1023,
    screenWidth: window.innerWidth,
    onResize: (width) => {},
};

export const Context = createContext(defaultValue);

interface ContextProviderProps {
    children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const mobileBreakpoint = 1023;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);

    const resizeHandler = (width: number) => {
        if(width < mobileBreakpoint) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        setScreenWidth(width);
    };

    const contextValue: ContextSchema = {
        mobileBreakpoint,
        isMobile,
        screenWidth,
        onResize: resizeHandler
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};