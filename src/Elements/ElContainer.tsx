import React from "react";
import { Flex } from '@chakra-ui/layout';


export const ElContainer = (props: any) => {

    return <Flex m="4" className='container abcd' {...props}>
        {props.children}
    </Flex>;

};