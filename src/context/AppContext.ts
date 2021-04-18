import { createContext } from 'react';

export const AppContextDefaultValue = {
    showLoader: false,
    loaderAnimationCompleted: false,
};
export const AppContext = createContext(AppContextDefaultValue);