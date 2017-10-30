import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import { saveAccessToken } from '../lib/facebook';
import { loadCurrentUser } from '../redux/action/user';

import './Profile.css';

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
      <Paper zDepth={1} className="profile-page">
        <div className="header"/>
        {user.avatar
          ? <img src={user.avatar} alt={user.name}/>
          : <div className="default-user-image"/>
        }
        <div className="user-name">{user.name}</div>
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
