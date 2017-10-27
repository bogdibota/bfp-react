import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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

  render() {
    return (
      <header>
        <AppBar
          title="BFP"
          onLeftIconButtonTouchTap={this.handleToggle}
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
