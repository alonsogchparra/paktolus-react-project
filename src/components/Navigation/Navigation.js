import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Navigation = ({
  money,
  login,
  handleClickOpen,
  username,
  handleLogout,
  handleOpenRecharge,
}) => {
  const classes = useStyles();

  const checkUser = login ? (
    <>
      <Typography
        variant="h6"
        style={{ paddingLeft: "10px", paddingRight: "10px" }}
      >
        {username}
      </Typography>
      <Button onClick={() => handleLogout()} color="inherit">
        Logout
      </Button>
    </>
  ) : (
    <Button onClick={() => handleClickOpen()} color="inherit">
      Login
    </Button>
  );

  console.log("LOGIN", login);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          {money >= 0 && money < 1 && (
            <Button onClick={() => handleOpenRecharge()} color="inherit">
              Recharge
            </Button>
          )}
          <Typography
            variant="h6"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            ${money}
          </Typography>
          {checkUser}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
