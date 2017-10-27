import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header />
        <main>main here</main>
        <Footer/>
      </MuiThemeProvider>
    );
  }
}

export default App;
