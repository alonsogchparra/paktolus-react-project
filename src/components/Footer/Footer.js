import { Typography } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Typography variant="h6" className={classes.title}>
        Copyright &copy; 2021 Alonso Parra. Paktolus
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
