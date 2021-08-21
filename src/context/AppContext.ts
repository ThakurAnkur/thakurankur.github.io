import { createContext } from 'react';

export const AppContextDefaultValue = {
    showLoader: false,
    loaderAnimationCompleted: false,
    headerBreadCrumbs: new Map(),
    count: 0,
};
export const AppContext = createContext(AppContextDefaultValue);