import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class CreateGroupDialog extends Component {
  state = {
    newGroupName: '',
  };

  render() {
    const {handleClose, open, saveGroup} = this.props;
    const {newGroupName} = this.state;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onClick={() => {
          handleClose();
          saveGroup(newGroupName);
        }}
      />,
    ];

    return (
      <Dialog
        title="Create new Group"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleClose}
      >
        <TextField
          hintText="My awesome group"
          floatingLabelText="Group name"
          floatingLabelFixed={true}
          value={newGroupName}
          onChange={({target: {value}}) => this.setState(() => ({newGroupName: value}))}
          fullWidth={true}
        />
      </Dialog>
    );
  }
}

export default CreateGroupDialog;
