import { createContext, ReactNode, useState } from 'react';
import { hiddenLinks } from 'shared/lib';

//temporary hidden links logic
interface HiddenLinks {
    pricing: boolean;
    terms: boolean;
    security: boolean;
    blog: boolean;
    social: boolean;
}
//

export interface ContextSchema {
    mobileBreakpoint: number,
    isMobile: boolean,
    screenWidth: number,
    onResize: (width: number) => void;
    onPlay: (audio: string) => void;
    playedAudio: string;
    //temporary hidden links logic
    hiddenLinks: HiddenLinks;
    //
}

const defaultValue: ContextSchema = {
    isMobile: false,
    mobileBreakpoint: 1023,
    screenWidth: window.innerWidth,
    onResize: (width) => {},
    onPlay: (audio) => {},
    playedAudio: '',
    //temporary hidden links logic
    hiddenLinks: {
        blog: false,
        pricing: false,
        terms: false,
        security: false,
        social: false
    }
    //
};

export const Context = createContext(defaultValue);

interface ContextProviderProps {
    children: ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const mobileBreakpoint = 1023;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);
    const [playedAudio, setPlayedAudio] = useState('');

    const resizeHandler = (width: number) => {
        if(width < mobileBreakpoint) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
        setScreenWidth(width);
    };

    const playHandler = (audio: string) => {
        setPlayedAudio(audio);
    };

    const contextValue: ContextSchema = {
        playedAudio,
        mobileBreakpoint,
        isMobile,
        screenWidth,
        onResize: resizeHandler,
        onPlay: playHandler,
        //temporary hidden links logic
        hiddenLinks,
        //
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};