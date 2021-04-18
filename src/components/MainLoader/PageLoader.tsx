import { Box } from '@chakra-ui/react';
import * as React from "react";
import { AppContext } from '../../context/AppContext';

export type LoaderTypes = {
    percentage: Number;
};

let value = 0;
export const PageLoader = (): React.ReactElement<LoaderTypes> | null => {
    const [loading, setLoading] = React.useState(true);
    const appContext = React.useContext(AppContext);

    React.useEffect(() => {
        const loaderBox = document.getElementById('loader-slider');
        if (loaderBox) {
            loaderBox.style.width = `${ value }%`;
        }
        return () => {
            clearInterval(interval);
            appContext.showLoader = false;
        };
    });
    const interval = setInterval(() => {
        if (value >= 100 && appContext.showLoader) {
            clearInterval(interval);
            setLoading(!loading);
            appContext.showLoader = false;
        }
        value = value + 10;
    }, 10);
    return appContext.showLoader ? (<Box height={4} w={'100%'} bgColor={'cyan'} pos={'fixed'} top={0} left={0}><Box id="loader-slider" bgColor={'black'} height={'100%'} transition={'width 0.1s ease'} data-testid="loader-slider"></Box></Box>) : null;
    // return <h2>Hello</h2>
};