import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField
} from "@material-ui/core";
import React from "react";

const Game = ({
  slotOne,
  slotTwo,
  slotThree,
  openGame,
  handleCloseGame,
  spinRandom,
  handleDebug,
}) => {
  return (
    <div>
      <Dialog
        open={openGame}
        onClose={handleCloseGame}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="md"
      >
        <Grid container justify="center" alignItems="center">
          <DialogTitle id="form-dialog-title">Game</DialogTitle>
        </Grid>

        <form>
          <DialogContent>
            <DialogContentText align={"center"}>
              Good luck on your spin
            </DialogContentText>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={4}>
                <Box m={2}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="slot_one"
                    type="text"
                    label="Slot 1"
                    fullWidth
                    value={slotOne}
                    variant="outlined"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box m={2}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="slot_one"
                    type="text"
                    label="Slot 2"
                    fullWidth
                    value={slotTwo}
                    variant="outlined"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box m={2}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="slot_one"
                    type="text"
                    label="Slot 3"
                    fullWidth
                    value={slotThree}
                    variant="outlined"
                  />
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions style={{ margin: "0px auto" }}>
            <Button onClick={spinRandom} color="primary" size="large">
              Random numbers
            </Button>
            <Button onClick={handleDebug} color="primary" size="large">
              777 debug
            </Button>
            <Button onClick={handleCloseGame} color="primary" size="large">
              close
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Game;
