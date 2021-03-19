import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";

import { NavLink, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import ButtonLinks from "../button-link/index";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
  white:{
    background:"#fff"
  }
}));

function MainNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.white}  position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/">Logo</NavLink>
            </Typography>

            <ButtonLinks>
              <ButtonLinks.ButtonLink to={ROUTES.SIGN_IN}>
                {" "}
                Login
              </ButtonLinks.ButtonLink>
            </ButtonLinks>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default MainNav;
