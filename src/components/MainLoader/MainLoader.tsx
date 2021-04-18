import { Box } from '@chakra-ui/react';
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

    return <Box mt={4}>
        {
            <React.Suspense fallback={<PageLoader />}><MyApp /></React.Suspense>
        }
    </Box>;
};
export default MainLoader;