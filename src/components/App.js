import React, { Component } from 'react';
import Router from "components/Router";
import GlobalStyles from 'components/GlobalStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'CookieRun Bold',
  },
});

class App extends Component {
  render() {
    return(
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
