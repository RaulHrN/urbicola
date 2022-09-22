import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Initial } from './pages/initial/Initial';
import { Servicos } from './pages/servicos/Servicos';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Projetos } from './pages/projetos/Projetos';
import { SobreNos } from './pages/sobreNos/SobreNos';
import { Contato } from './pages/contato/Contato';
import {createTheme, ThemeProvider} from '@mui/material';

function App() {
  const theme = createTheme({
    palette: {
        primary: {
            main: "#EACFE2",
            dark: "#EACFE2",
            contrastText: "#FFFFFF"
        }
    }
})

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Initial/>
          </Route>
          <Route path='/servicos'>
            <Header/>
            <Servicos/>
            <Footer/>
          </Route>
          <Route path='/projetos'>
            <Header/>
            <Projetos/>
            <Footer/>
          </Route>
          <Route path='/sobre_nos'>
            <Header/>
            <SobreNos/>
            <Footer/>
          </Route>
          <Route path='/contato'>
            <Header/>
            <Contato/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
