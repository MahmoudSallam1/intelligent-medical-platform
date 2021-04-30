import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import "./why-us.css";
import { tiers } from "./tiers";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#EEF9FE",
    paddingBottom: "10em",
  },
  heroContent: {
    padding: theme.spacing(12, 0, 6),
  },
  heading: {
    color: "#1DB5E4",
    lineHeight: "1.1",
    fontSize: "48px",
    textAlign: "center",
  },

  content: {
    color: "#6B6C6F",
    marginTop: "25px",
    fontSize: "20px",
    textAlign: "center",
  },

  imageClass: {
    objectFit: "cover",
    width: "60px",
  },
}));

function WhyUs() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.section}>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography className={classes.heading} variant="h2" gutterBottom>
            <Box fontWeight="fontWeightBold">Why name</Box>
          </Typography>
          <Typography className={classes.content} variant="body1" gutterBottom>
            A platform that adapts to your needs.
          </Typography>
        </Container>

        <Container maxWidth="lg" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid item key={tier.id} xs={12} md={4}>
                <div className="card-us">
                  <h3>{tier.title}</h3>
                  <p>{tier.desc}</p>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default WhyUs;
