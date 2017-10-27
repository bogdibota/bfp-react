import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';

import { facebookLoginUrl } from '../lib/facebook';

const style = {
  paddingTop: 64,
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  login = () => window.location = facebookLoginUrl;

  renderUserAvatar = () => (
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar src={this.props.user.avatar}/>
      }
    >
      {this.props.user.name}
    </ListItem>
  );

  render() {
    const {user} = this.props;
    return (
      <header>
        <AppBar
          title="BFP"
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementRight={user
            ? this.renderUserAvatar()
            : <FlatButton label="Login with Facebook" onClick={this.login}/>}
        />

        <Drawer
          containerStyle={style}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem>My groups</MenuItem>
          <MenuItem>Profile</MenuItem>
        </Drawer>
      </header>
    );
  }
}

export default Header;
