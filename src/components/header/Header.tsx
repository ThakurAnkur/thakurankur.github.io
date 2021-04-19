import React from "react";
import { IconButton } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useColorMode } from '@chakra-ui/color-mode';


export const Header = () => { 
    const { colorMode, toggleColorMode } = useColorMode();
    return <header>
        <Flex p="4">
            <Box as="ul" listStyleType="none">
                <li  style={{ fontSize: "24px" }}>
                <a href="#/games">Games</a>
                </li>
            </Box>
            <IconButton
                onClick={() => {
                    toggleColorMode();
                }}
                ml="auto"
                data-testid={"toggle-color-mode"}
                aria-label="Change Site Theme"
                icon={<FontAwesomeIcon icon={colorMode === 'dark' ? faSun : faMoon} />}
            />
        </Flex>
    </header>;
};