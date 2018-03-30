import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddUserDialog extends Component {
  state = {
    userName: '',
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
        title="Add new user to group"
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={handleClose}
      >
        <TextField
          hintText="name of new user"
          floatingLabelText="User name"
          floatingLabelFixed={true}
          value={newGroupName}
          onChange={({target: {value}}) => this.setState(() => ({userName: value}))}
          fullWidth={true}
        />
      </Dialog>
    );
  }
}

export default AddUserDialog;
