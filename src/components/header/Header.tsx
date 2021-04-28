import React from "react";
import { IconButton } from '@chakra-ui/button';
import { Box, Flex } from '@chakra-ui/layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useColorMode } from '@chakra-ui/color-mode';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/breadcrumb';
import { useHistory } from 'react-router';
import { BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const history = useHistory();
    console.log(history);
    return <header>
        <Flex p="4">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="#">
                        Todo
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="about">
                        More Links to Come
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem as={Link} to="contact">
                    <BreadcrumbLink>More Links to Come</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
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