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
import AddUserDialog from '../components/AddUserDialog';

import { createGroup, addUser } from '../redux/action/group';
import ReactTooltip from 'react-tooltip';

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
    userDialogOpen: false,
    groupId: -1
  };

  handleUserOpen = (id) => {
    this.setState(() => ({userDialogOpen: true}));
    this.setState(() => ({groupId: id}));
  }

  handleUserClose = () => {
    this.setState(() => ({userDialogOpen: false}));
  }

  handleOpen = () => {
    this.setState(() => ({dialogOpen: true}));
  };

  handleClose = () => {
    this.setState(() => ({dialogOpen: false}));
  };

  render() {
    const {state: {myGroups}, actions: {createGroup, addUser}} = this.props;
    const {dialogOpen} = this.state;
    const {userDialogOpen} = this.state;
    const {groupId} = this.state;
    return (
      <div className="groups-page">
        {myGroups.map(({id, name, users}) => (
          <Card key={id} className="group">
            <CardTitle key={id} title={name} className="bfp-card-title" subtitle={`${users.length} ${users.length === 1 ? 'person' : 'people'}`}  onClick={()=>console.log("should redirect to group.js page")}/>
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
            <FloatingActionButton mini={true} style={{float:"right",margin: "5px"}} data-tip="Add user" onClick={()=> {this.handleUserOpen(id)}}>
              <ContentAdd />
            </FloatingActionButton>
            <ReactTooltip />
            </Card>
        ))}

        <FloatingActionButton data-tip="Add Group" style={styles.fab} onClick={this.handleOpen}>
          <ContentAdd />
        </FloatingActionButton>
        <ReactTooltip />

        <CreateGroupDialog open={dialogOpen} handleClose={this.handleClose} saveGroup={createGroup}/>

        <AddUserDialog open={userDialogOpen} handleClose={this.handleUserClose} saveUser={addUser} id={groupId} />

      </div>
    );
  }
}

export default connect(
  ({group: {myGroups}}) => ({state: {myGroups}}),
  dispatch => ({actions: bindActionCreators({addUser, createGroup}, dispatch)}),
)(Groups);
