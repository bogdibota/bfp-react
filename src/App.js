import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { logout } from './redux/action/user';

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
    const {actions: {logout}, user} = this.props;
    return (
      <BrowserRouter basename={basename}>
        <div>
          <Header user={user} logout={logout}/>

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
  dispatch => ({actions: bindActionCreators({logout}, dispatch)}),
)(App);
