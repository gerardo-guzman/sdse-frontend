import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import App from './App';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#711C43',
      },
      secondary: {
        main: '#039be5',
      },
    },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

