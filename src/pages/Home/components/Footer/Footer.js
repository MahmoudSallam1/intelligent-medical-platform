import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useTranslation } from "react-i18next";

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
    padding: "6em 2em",
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
  footerCopyrights: {
    color: "#fff",
    textAlign: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <CssBaseline />

      <div className={classes.section}>
        <Container maxWidth="lg" component="footer" className={classes.footer}>
          {/* <Grid container spacing={1} justify="space-between">
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
          </Grid> */}
          <div>
            <p className={classes.footerCopyrights}>
              {t("footer_copyrights_developer")}
            </p>
            <p className={classes.footerCopyrights}>
              {t("footer_copyrights_supervision")}
            </p>
          </div>
        </Container>
      </div>
      {/* End footer */}
    </>
  );
}
