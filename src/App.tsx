import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import './app.css';

const parentTheme = {};

function App() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
