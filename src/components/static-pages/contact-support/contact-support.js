import React from "react";
import Typography from "@material-ui/core/Typography";
import MainNav from "../../main-nav/main-nav";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ChatIcon from "@material-ui/icons/Chat";
import DraftsIcon from "@material-ui/icons/Drafts";
import PhoneIcon from "@material-ui/icons/Phone";

import Footer from "../../footer/footer";
const useStyles = makeStyles((theme) => ({
  section: {
    width: "90%",
    margin: "0 auto",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  heading: {
    color: "#094067",
    fontWeight: "500",
    width: "90%",
    margin: "0 auto",
    marginBottom: "1.5em",
    lineHeight: "1.1",
    fontSize: "24px",
  },

  title: {
    color: "#094067",
  },
  content: {
    color: "#6B6C6F",
  },
  card: {
    padding: "2em",
    background: "#ffffff",
    /* box-shadow: 0 3px 10px rgba(0, 0, 0, .06), 0 0 3px rgba(0, 0, 0, .04); */
    transition:
      ".3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12)",
    borderRadius: "10px",
    border: "1px solid #E0E0E0",
    width: "90%",
    margin: "0 auto",
    marginBottom: "0.7em",
  },
}));

function ContactSupport() {
  //
  const classes = useStyles();

  return (
    <>
      <MainNav />
      <section className={classes.section}>
        <Typography className={classes.heading} gutterBottom variant="h2">
          Contact support
        </Typography>

        <div className={classes.card}>
          <Grid container wrap="nowrap" spacing={4}>
            <Grid item>
              <ChatIcon style={{ fontSize: "3rem", color: "#1DB5E4" }} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography className={classes.title} variant="h6">
                Chat with Us
              </Typography>{" "}
              <Typography className={classes.content} variant="body1">
                Chat with a product expert about your inquiry, Sunday-Thursday
                from 8:00 AM to 5:00 PM.
              </Typography>{" "}
            </Grid>
          </Grid>
        </div>
        <div className={classes.card}>
          <Grid container wrap="nowrap" spacing={4}>
            <Grid item>
              <DraftsIcon style={{ fontSize: "3rem", color: "#1DB5E4" }} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography className={classes.title} variant="h6">
                Email Us{" "}
              </Typography>{" "}
              <Typography className={classes.content} variant="body1">
                Email your question to a technical specialist at any time.
                name@gmail.com
              </Typography>{" "}
            </Grid>
          </Grid>
        </div>
        <div className={classes.card}>
          <Grid container wrap="nowrap" spacing={4}>
            <Grid item>
              <PhoneIcon style={{ fontSize: "3rem", color: "#1DB5E4" }} />
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography className={classes.title} variant="h6">
                Call Us
              </Typography>{" "}
              <Typography className={classes.content} variant="body1">
                Contact us by phone at+201*******, Sunday-Thursday from 8:00 AM
                to 5:00 PM.
              </Typography>{" "}
            </Grid>
          </Grid>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactSupport;
