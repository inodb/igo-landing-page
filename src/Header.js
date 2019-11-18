import React, { Component } from "react";
import {
  Avatar,
  AppBar,
  Toolbar,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

import classNames from "classnames";
import image from "./igo.png";

const Header = ({ classes, loggedIn }) => (
  // <div className={classes.mskccHeader}>
  <AppBar position="static" title={image} className={classes.header}>
    <Toolbar>
      <Typography color="inherit" variant="h6" className={classes.title}>
        <img alt="mskcc logo" src={image} className={classes.avatar} />
        Integrated Genomics Operation
      </Typography>
    </Toolbar>
  </AppBar>

  // </div>
);

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    textAlign: "center"
  },
  title: {
    margin: "0 auto"
  },
  avatar: {
    height: "2.5em",
    width: "auto",
    verticalAlign: "middle",
    marginRight: "1em"
  }
});

export default withStyles(styles)(Header);
