import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class AddUserDialog extends Component {
  state = {
    newUserName: '',
  };

  render() {
    const {handleClose, open, saveUser, id} = this.props;
    const {newUserName} = this.state;
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
          saveUser(newUserName, id);
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
          value={newUserName}
          onChange={({target: {value}}) => this.setState(() => ({newUserName: value}))}
          fullWidth={true}
        />
      </Dialog>
    );
  }
}

export default AddUserDialog;
