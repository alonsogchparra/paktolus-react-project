import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React from "react";

const UserDialog = ({
  handleClose,
  open,
  handleUsername,
  handleLogin,
  nameInputRef,
}) => {
  const submitForm = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    handleUsername(name);
    handleClose();
    handleLogin();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <form onSubmit={submitForm}>
          <DialogContent>
            <DialogContentText>Write your username</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
              inputRef={nameInputRef}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default UserDialog;
