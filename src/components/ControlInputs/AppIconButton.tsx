import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

export type AppIconButtonType = {
    dataTestId?: string;
    children: ReactElement;
};
export const AppIconButton = (props: any): ReactElement => {
    return <Box className="app-icon-button" {...props}>{props.children}</Box>;
};
