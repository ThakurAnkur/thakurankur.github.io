import * as React from "react";
import { Box } from '@chakra-ui/layout';
import { Header } from "../components/header/Header";


const MainLayout = (props: any) => {
    const { pageName, children } = props;
    return (
        <Box className="main-layout-wrapper" minH="100vh" w="100%" data-testid={pageName}>
            <Header />
            {children}
        </Box>
    );
};

export default MainLayout;