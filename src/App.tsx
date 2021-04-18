// font-family: 'Dancing Script', cursive;
// font-family: 'Roboto Slab', serif;
import * as  React from 'react';
import { AppLoader } from './Pages/AppLoader';
import { AppContext, AppContextDefaultValue } from "./context/AppContext";
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from './theme/defaultTheme';

function App () {
  return (<AppContext.Provider value={AppContextDefaultValue}>
    <ChakraProvider theme={defaultTheme}>
      <AppLoader></AppLoader>
    </ChakraProvider>
  </AppContext.Provider>);
}

export default App;
