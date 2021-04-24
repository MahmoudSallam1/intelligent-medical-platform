import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

import * as ROUTES from "../../constants/routes";



const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "0.3em 10em",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
    },
  },


  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 2),
    color:"#fff"
  },
}));

function MainNav() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            IntelligentMedicalSystem
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              About us
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainNav;
