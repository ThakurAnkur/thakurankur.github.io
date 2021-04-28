import { createContext } from 'react';

export const AppContextDefaultValue = {
    showLoader: false,
    loaderAnimationCompleted: false,
    headerBreadCrumbs: new Map(),
};
export const AppContext = createContext(AppContextDefaultValue);