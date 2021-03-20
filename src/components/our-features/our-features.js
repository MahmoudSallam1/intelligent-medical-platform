import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  section: {
    marginBottom: "2em",
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  card: {
    borderRadius: "10px",
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },

  CardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "3em",
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },

  imageClass: {
    objectFit: "cover",
    width: "60px",
  },
}));

const tiers = [
  {
    title: "Digitalize",
    image: "/images/icons/prescription.png",
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "OCR",
    image: "/images/icons/ocr.png",

    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Analytics",
    image: "/images/icons/analytics.png",
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

function OurFeatures() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.section}>
        {/* Hero unit */}
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Our features
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </Typography>
        </Container>

        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card className={classes.card}>
                  <CardContent className={classes.CardContent}>
                    <img
                      className={classes.imageClass}
                      src={tier.image}
                      alt=""
                    />
                    <Typography
                      variant="h6"
                      align="center"
                      color="textPrimary"
                      gutterBottom
                    >
                      <Box lineHeight={1.3} m={1}>
                        {tier.title}
                      </Box>
                    </Typography>

                    <Typography
                      variant="subtitle3"
                      align="center"
                      color="textSecondary"
                      component="p"
                    >
                      <Box lineHeight={1.3} m={1}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </Box>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default OurFeatures;
