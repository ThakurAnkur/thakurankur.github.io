import * as React from 'react';
import { AppContext } from '../../context/AppContext';
import { PageLoader } from './PageLoader';


type MainLoaderType = {
    componentToLoad: any;
};

const MainLoader = ({ componentToLoad }: MainLoaderType): React.ReactElement => {
    const MyApp = componentToLoad;
    const appContext = React.useContext(AppContext);
    appContext.showLoader = true;

    return <React.Suspense fallback={<PageLoader />}><MyApp /></React.Suspense>;
};
export default MainLoader;