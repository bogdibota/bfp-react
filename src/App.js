import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header user={this.props.user}/>

          <main>
            <Route exact path="/" component={() => <div>home</div>}/>
            <Route path="/profile" component={Profile}/>
          </main>

          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(
  ({user: {user}}) => ({user}),
)(App);
