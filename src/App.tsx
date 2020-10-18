import React from 'react';
import { ThemeProvider } from '@material-ui/core';

import Home from './pages/Home/Home';
import { materialUiTheme } from './theme/theme-interface';
import "./styles/base.scss"
// import { Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={materialUiTheme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
