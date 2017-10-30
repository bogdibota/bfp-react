import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import { facebookLoginUrl } from '../lib/facebook';

const styles = {
  title: {
    cursor: 'pointer',
  },
  topSection: {
    backgroundColor: 'rgb(0, 188, 212)',
    height: 64,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 400,
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '1em',
    flex: 1,
  },
  menuLink: {
    textDecoration: 'none',
  },
  menuLinkActive: {
    fontWeight: 'bold',
  },
  userSection: {
    color: '#fff',
  },
  userSectionMenu: {
    fill: '#fff',
  },
};

const MenuLink = ({closeDrawer, route, text}) => (
  <NavLink to={route}
           onClick={closeDrawer}
           style={styles.menuLink}
           activeStyle={styles.menuLinkActive}>
    <MenuItem>{text}</MenuItem>
  </NavLink>
);

const Logged = ({user: {avatar, name}, logout, navigate}) => (
  <IconMenu
    iconButtonElement={
      <ListItem
        style={styles.userSection}
        leftAvatar={<Avatar src={avatar}/>}
        rightIcon={<MoreVertIcon style={styles.userSectionMenu}/>}
      >
        {name}
      </ListItem>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Profile" onClick={() => navigate('/profile')}/>
    <Divider/>
    <MenuItem primaryText="Sign out" onClick={logout}/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  login = () => window.location = facebookLoginUrl;

  renderUserAvatar = () => {
    const {avatar, name} = this.props.user;
    return (
      <ListItem
        disabled={true}
        leftAvatar={<Avatar src={avatar}/>}
      >
        {name}
      </ListItem>
    );
  };

  renderDrawer = () => {
    const {open} = this.state;
    return (
      <Drawer
        containerStyle={styles.drawer}
        docked={false}
        width={200}
        open={open}
        onRequestChange={(open) => this.setState({open})}
      >
        <Paper style={styles.topSection} zDepth={1}>
          <Link to="/" style={styles.drawerTitle} onClick={this.handleClose}>BFP</Link>
        </Paper>
        <MenuLink closeDrawer={this.handleClose} route="/groups" text="My Groups"/>
        <MenuLink closeDrawer={this.handleClose} route="/profile" text="Profile"/>
      </Drawer>
    );
  };

  render() {
    const {user, history, logout} = this.props;

    return (
      <header>
        <AppBar
          title="BFP"
          titleStyle={styles.title}
          onLeftIconButtonTouchTap={this.handleToggle}
          onTitleTouchTap={() => history.push('/')}
          iconElementRight={!user.isFake
            ? <Logged user={user} logout={logout} navigate={history.push}/>
            : <FlatButton label="Login with Facebook" onClick={this.login}/>}
        />
        {this.renderDrawer()}
      </header>
    );
  }
}

export default withRouter(Header);
