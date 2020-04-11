import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import './index.css';
import purple from '@material-ui/core/colors/purple';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#000',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: '"Noto Sans KR"'
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);