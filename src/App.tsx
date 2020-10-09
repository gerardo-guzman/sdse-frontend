import React, { useReducer } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthContext } from './auth/AuthContext';
import NavBar from './components/NavBar';


// styles
import './app.css';
import { authReducer } from './auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('user')!) || { logged: false, }
}


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

function App() {

  const [user, dispatchUser] = useReducer(authReducer, {}, init);
  return (
    <>
    <AuthContext.Provider value={{ user, dispatchUser }} >
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
    </AuthContext.Provider>
    </>
  );
}

export default App;
