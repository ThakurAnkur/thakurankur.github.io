import React from "react";
import { IconButton } from '@chakra-ui/button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useColorMode } from '@chakra-ui/color-mode';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/breadcrumb';
import { useHistory } from 'react-router';
import { BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { ElContainer } from "../../Elements/ElContainer";


export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const history = useHistory();
    return <header>
        <ElContainer>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="todo">
                        TodoList
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="about">
                        More Links to Come
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to="contact">More Links to Come</BreadcrumbLink>
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
        </ElContainer>
    </header >;
};