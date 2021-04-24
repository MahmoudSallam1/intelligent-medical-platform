import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

function Copyright() {
  return (
    <Typography variant="body2" color="" align="center">
      {"Copyright © IntelligentMedicalSystem "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    padding: "0.3em 10em",
  },
  item: {
    color: "#fff",
  },
  title:{
    color: "#fff",

  },
  footer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(8),
    },
  },
}));

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Footer() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.section}>
        <Container maxWidth="lg" component="footer" className={classes.footer}>
          <Grid container spacing={3} justify="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography className={classes.title} variant="h6" gutterBottom>
                  {footer.title}
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link className={classes.item} href="#">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          {/* <Box mt={5}>
            <Copyright />
          </Box> */}
        </Container>
      </div>
      {/* End footer */}
    </>
  );
}
