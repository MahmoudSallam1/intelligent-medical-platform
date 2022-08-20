import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { useTranslation } from "react-i18next";

import "./our-features.css";
import { ourFeaturesArray } from "./ourFeaturesArray";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#F5F6FA",
    paddingBottom: "7em",
  },
  heroContent: {
    padding: theme.spacing(12, 0, 6),
  },
  heading: {
    color: "#1DB5E4",
    lineHeight: "1.1",
    fontSize: "48px",
    textAlign: "center",
    marginBottom: "5px",
  },

  content: {
    color: "#6B6C6F",
    fontSize: "20px",
    textAlign: "center",
  },

  imageClass: {
    objectFit: "cover",
    width: "60px",
  },
}));

function OurFeatures() {
  const classes = useStyles();
  const { t } = useTranslation();

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
            <Box fontWeight="fontWeightBold">{t("our_features_heading")}</Box>
          </Typography>
          <Typography className={classes.content} variant="body1" gutterBottom>
            {t("our_features_desc")}
          </Typography>
        </Container>

        <Container maxWidth="lg" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {/* {ourFeaturesArray.map((tier) => (
              <Grid item key={tier.id} xs={12} md={4}>
                <div className={`card card-${tier.id}`}>
                  <img
                    src={`/images/features/${tier.id}.png`}
                    alt="our features"
                  />
                  <h3>{tier.title}</h3>
                  <p>{tier.desc}</p>
                </div>
              </Grid>
            ))} */}
            <Grid item xs={12} md={4}>
              <div className={`card card-1`}>
                <img src={`/images/features/1.png`} alt="our features" />
                <h3>{t("EMR_heading")}</h3>
                <p>{t("EMR_desc")}</p>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={`card card-2`}>
                <img src={`/images/features/2.png`} alt="our features" />
                <h3>{t("practice_management_heading")}</h3>
                <p>{t("practice_management_desc")}</p>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={`card card-3`}>
                <img src={`/images/features/3.png`} alt="our features" />
                <h3>{t("dictation_heading")}</h3>
                <p>{t("dictation_desc")}</p>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={`card card-4`}>
                <img src={`/images/features/4.png`} alt="our features" />
                <h3>{t("scan_documents_heading")}</h3>
                <p>{t("scan_documents_desc")}</p>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={`card card-5`}>
                <img src={`/images/features/5.png`} alt="our features" />
                <h3>{t("analytics_heading")}</h3>
                <p>{t("analytics_heading_desc")}</p>
              </div>
            </Grid>

            <Grid item xs={12} md={4}>
              <div className={`card card-6`}>
                <img src={`/images/features/6.png`} alt="our features" />
              

                <h3>{t("mobile_EHR_heading")}</h3>
                <p>{t("mobile_EHR_desc")}</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default OurFeatures;
