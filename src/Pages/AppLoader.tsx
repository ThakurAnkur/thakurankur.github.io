import * as React from "react";
import { Flex } from '@chakra-ui/react';
import MainLoader from '../components/MainLoader/MainLoader';

export const AppLoader = () => {
    return <Flex className={'app-loader'} minH={'100vh'} maxW={'100%'} w={'100%'} alignItems="center" justifyContent={'center'}>
        <MainLoader componentToLoad={React.lazy(() => import(/* webpackChunkName: "page-home" */'../Pages/Home'))}></MainLoader>
    </Flex>;
};