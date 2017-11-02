import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CreateGroupDialog from '../components/CreateGroupDialog';

import { createGroup } from '../redux/action/group';

import './Groups.css';

const styles = {
  addGroup: {
    color: '#fff',
  },
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
    zIndex: 1,
  },
};

class Groups extends Component {
  state = {
    dialogOpen: false,
  };

  handleOpen = () => {
    this.setState(() => ({dialogOpen: true}));
  };

  handleClose = () => {
    this.setState(() => ({dialogOpen: false}));
  };

  render() {
    const {state: {myGroups}, actions: {createGroup}} = this.props;
    const {dialogOpen} = this.state;
    return (
      <div className="groups-page">
        {myGroups.map(({id, name, users}) => (
          <Card key={id} className="group">
            <CardTitle title={name} subtitle={`${users.length} ${users.length === 1 ? 'person' : 'people'}`}/>
            <Divider />
            <List>
              {users.map(({id: userId, name, avatar}) => (
                <ListItem
                  key={`${id}_${userId}`}
                  primaryText={name}
                  leftAvatar={<Avatar src={avatar}/>}
                />
              ))}
            </List>
          </Card>
        ))}

        <FloatingActionButton style={styles.fab} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>

        <CreateGroupDialog open={dialogOpen} handleClose={this.handleClose} saveGroup={createGroup}/>
      </div>
    );
  }
}

export default connect(
  ({group: {myGroups}}) => ({state: {myGroups}}),
  dispatch => ({actions: bindActionCreators({createGroup}, dispatch)}),
)(Groups);
