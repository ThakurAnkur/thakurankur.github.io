import * as  React from 'react';
import { AppLoader } from './Pages/AppLoader';
import { AppContext, AppContextDefaultValue } from "./context/AppContext";

function App () {
  return <AppContext.Provider value={AppContextDefaultValue}>
    <AppLoader></AppLoader>
  </AppContext.Provider>;
}

export default App;
