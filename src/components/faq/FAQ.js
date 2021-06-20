import React from "react";

import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { faqArray } from "./faqArray";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#fff",
    [theme.breakpoints.up("xs")]: {
        padding: theme.spacing(12, 6, 12),
    },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(12, 12, 12),

      },
  },
  heading: {
    color: "#1DB5E4",
    lineHeight: "1.1",
    fontSize: "48px",
    marginBottom:"5px",
    textAlign: "center",
  },

  content: {
    color: "#5f6c7b",
    fontSize: "20px",
    textAlign: "center",
    marginBottom:"25px",

  },
  question: {
    color: "#094067",
    fontWeight: "600",
    fontSize:"1.2rem"
  },
  answer: {
    color: "#5f6c7b",
    fontSize:"1.1rem"
  },
}));

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },

  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",

    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },

  content: {
    "&$expanded": {
      margin: "12px 0",
      
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor:"#EEF9FE"
  },
}))(MuiAccordionDetails);

function FAQ() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState("");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography className={classes.heading} variant="h2" gutterBottom>
          <Box fontWeight="fontWeightBold">FAQs</Box>
        </Typography>
        <Typography className={classes.content} variant="body1" gutterBottom>
        How can we help you?

        </Typography>
      </Container>
      <div>
        {faqArray &&
          faqArray.map((accordion) => (
            <Accordion
              key={accordion.id}
              square 
              expanded={expanded === `"panel${accordion.id}`}
              onChange={handleChange(`"panel${accordion.id}`)}
            >
              <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.question}>
                  {accordion.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.answer}>
                  {accordion.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
    </section>
  );
}

export default FAQ;
