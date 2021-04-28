// font-family: 'Dancing Script', cursive;
// font-family: 'Roboto Slab', serif;
import * as  React from 'react';
import { AppLoader } from './Pages/AppLoader';
import { AppContext, AppContextDefaultValue } from "./context/AppContext";
import { ChakraProvider } from '@chakra-ui/react';
import { defaultTheme } from './theme/defaultTheme';
import { Route, Switch, useHistory } from 'react-router-dom';
import Mainlayout from './Layout/Mainlayout';

function App () {
  return (<AppContext.Provider value={AppContextDefaultValue}>
    <ChakraProvider theme={defaultTheme}>
      <Switch>
        <Route exact path="/">
          <AppLoader reactLazyLoad={React.lazy(() => import(/* webpackChunkName: "page-home" */'./Pages/Home'))}></AppLoader>
        </Route>
        <Route path="*">
          <AppLoader reactLazyLoad={React.lazy(() => import(/* webpackChunkName: "page-notfound" */'./Pages/NotFound'))}></AppLoader>
        </Route>
      </Switch>
    </ChakraProvider>
  </AppContext.Provider >);
}

export default App;
