import * as React from "react";
import { Heading, Box } from '@chakra-ui/layout';
import { Header } from "../components/header/Header";

type MainLayout = {
    pageName: string;
};
const MainLayout = ({ pageName }: MainLayout) => {
    return (
        <Box className="main-layout-wrapper" minH="100vh" w="100%" data-testid={pageName}>
            <Header />
        </Box>
    );
};

export default MainLayout;