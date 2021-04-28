import * as React from "react";
import { Heading, Box } from '@chakra-ui/layout';
import { Header } from "../components/header/Header";

type MainLayoutProps = {
    pageName: string;
};
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