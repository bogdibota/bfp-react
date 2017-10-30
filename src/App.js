import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Profile from './pages/Profile';
import Home from './pages/Home';

const basename = process.env.NODE_ENV && process.env.NODE_ENV === 'production'
  ? '/bfp-react'
  : '/';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={basename}>
        <div>
          <Header user={this.props.user}/>

          <main>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
          </main>

          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  ({user: {user}}) => ({user}),
)(App);
