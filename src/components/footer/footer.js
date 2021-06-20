import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { footerContentArray } from "./footerContentArray";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#fff",
  },

  section: {
    background: "#1DB5E4",
    padding: "10em 2em",
  },
  item: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  title: {
    color: "#fff",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.section}>
        <Container maxWidth="lg" component="footer" className={classes.footer}>
          <Grid container spacing={1} justify="space-between">
            {footerContentArray.map((footer) => (
              <Grid item xs={6} sm={6} md={2} key={footer.id}>
                <Typography className={classes.title} variant="h6" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((description) => (
                    <li key={description.page}>
                      <Link className={classes.item} to={description.to}>
                        {description.page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      {/* End footer */}
    </>
  );
}
