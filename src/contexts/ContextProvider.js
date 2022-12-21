import React, { createContext, useContext, useState, useUstate} from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    Notification: false,
}

export const ContextProvider = ({ children}) => {
    const [activeMenu, setActiveMenu] = useState
    (true);
    const [isClicked, setIsClick] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false)
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    }
    

    const hadleClick = (clicked) => {
        setIsClick({ ...initialState, [clicked]: true});
    }

    return (
        <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClick,
            hadleClick,
            screenSize,
            setScreenSize,
            currentColor, currentMode,
            themeSettings, setThemeSettings,
            setMode, setColor
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);