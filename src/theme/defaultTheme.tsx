import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
    fonts: {
        body: "'Roboto Slab', serif",
        heading: "'Dancing Script', cursive",
    },
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    }
});