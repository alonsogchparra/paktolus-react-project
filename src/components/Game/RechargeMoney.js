import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@material-ui/core";
import React from "react";

const RechargeMoney = ({
  rechargeInputRef,
  handleCloseRecharge,
  openRecharge,
  money,
  updateMoney,
}) => {
  const submitForm = (e) => {
    e.preventDefault();

    const recharge = parseFloat(rechargeInputRef.current.value) + money;
    updateMoney(recharge);
    handleCloseRecharge();
  };

  return (
    <div>
      <Dialog
        open={openRecharge}
        onClose={handleCloseRecharge}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Recharge Money</DialogTitle>
        <form onSubmit={submitForm}>
          <DialogContent>
            <DialogContentText>
              Insert money to keep playing the game
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Add money"
              type="text"
              fullWidth
              inputRef={rechargeInputRef}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseRecharge} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Recharge
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default RechargeMoney;
