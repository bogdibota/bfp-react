import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveAccessToken } from '../lib/facebook';
import { loadCurrentUser } from '../redux/action/user';


class Profile extends Component {

  componentWillMount() {
    const {location: {hash}, actions: {loadCurrentUser}} = this.props;
    if (hash && ~hash.indexOf('#access_token')) {
      const [, accessToken, expiresIn] = /#access_token=([a-zA-Z0-9]+)&expires_in=([0-9]+)$/.exec(hash);
      saveAccessToken(accessToken, expiresIn);
      loadCurrentUser();
    }
  }

  render() {
    const {user} = this.props;
    return (
      <div className="profile-page">
        {user ? <h1>Welcome, {user.name}</h1>
          : <h1>Please login</h1>
        }
      </div>
    );
  }
}

export default connect(
  ({user: {user}}) => ({user}),
  dispatch => ({actions: bindActionCreators({loadCurrentUser}, dispatch)}),
)(Profile);
