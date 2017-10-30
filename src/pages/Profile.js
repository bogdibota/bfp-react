import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import { saveAccessToken } from '../lib/facebook';
import { loadCurrentUser } from '../redux/action/user';

import './Profile.css';

const defaultUser = {
  name: 'Placeholder',
  avatar: 'default',
};

class Profile extends Component {

  componentWillMount() {
    const {location: {hash}, actions: {loadCurrentUser}} = this.props;
    if (hash && ~hash.indexOf('#access_token')) {
      const [, accessToken, expiresIn] = /#access_token=([a-zA-Z0-9]+)&expires_in=([0-9]+)$/.exec(hash);
      saveAccessToken(accessToken, expiresIn);
      loadCurrentUser();
    }
  }

  fillUser(user = {}) {
    return {
      name: user.name || defaultUser.name,
      avatar: user.avatar || defaultUser.avatar,
    };
  }

  render() {
    const {user} = this.props;
    const safeUser = this.fillUser(user);
    return (
      <Paper zDepth={1} className="profile-page">
        <div className="header"/>
        <img src={safeUser.avatar} alt={safeUser.name}/>
        <div className="user-name">{safeUser.name}</div>
        <Divider />
        <div className="activity no-activity">
          No recent activity.
        </div>
      </Paper>
    );
  }
}

export default connect(
  ({user: {user}}) => ({user}),
  dispatch => ({actions: bindActionCreators({loadCurrentUser}, dispatch)}),
)(Profile);
