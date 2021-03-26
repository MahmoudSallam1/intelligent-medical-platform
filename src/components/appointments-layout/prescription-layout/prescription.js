import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PauseIcon from "@material-ui/icons/Pause";
import Button from "@material-ui/core/Button";
import MicIcon from "@material-ui/icons/Mic";
import PrintIcon from "@material-ui/icons/Print";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import Container from "@material-ui/core/Container";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  breath: {
    marginTop: "1em",
    textAlign: "left",
  },
  gray: {
    color: "#616161",
    fontWeight: "400",
    fontSize: "1rem",
  },
  ourFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: "1em",
  },
  button: {
    marginLeft: "1em",
  },
  card: {
    padding: "2em",
    background:"#EEF9FE"
  },
  doctorHeading: {
    color: "#1DB5E4",
    fontSize: "1rem",
  },
  subtitle: {
    color: "#757575",
    fontSize: "0.8rem",
    fontWeight: "400",
  },
}));

function Prescription() {
  const classes = useStyles();

  const [value, setValue] = React.useState();
  const [isRecord, setIsRecord] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(document.querySelectorAll(" p * div "));
  return (
    <Container>
      <form
      //   noValidate
      >
        <Grid spacing={3} container>
          <Grid item xs={12} md={12} lg={12}>
            <div >
              {/* <Typography
                className={classes.gray}
                align={"left"}
                variant="h6"
                gutterBottom
              >
                Prescription{" "}
              </Typography> */}

              <div>
                {" "}
                {isRecord ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={() => setIsRecord(!isRecord)}
                    endIcon={<PauseIcon />}
                  >
                    Pause
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setIsRecord(!isRecord)}
                    className={classes.button}
                    endIcon={<MicIcon />}
                  >
                    Record
                  </Button>
                )}
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  endIcon={<PrintIcon />}
                >
                  Print
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        <br></br>

        <Grid conatiner>
          <Grid item xs={12} md={12} lg={12}>
            <Paper elevation={0} className={classes.card}>
              <div className={classes.ourFlex}>
                {" "}
                <div>
                  <Typography
                    className={classes.doctorHeading}
                    align={"left"}
                    variant="h6"
                    gutterBottom
                  >
                    Doctor Name{" "}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    align={"left"}
                    variant="h6"
                  >
                    Specilaiztion{" "}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    align={"left"}
                    variant="h6"
                  >
                    Address{" "}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    align={"left"}
                    variant="h6"
                  >
                    Phone Number{" "}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    align={"left"}
                    variant="h6"
                  >
                    Working hours{" "}
                  </Typography>
                </div>{" "}
                <div>
                  <Typography
                    className={classes.doctorHeading}
                    align={"left"}
                    variant="h6"
                  >
                    Patient Name{" "}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    align={"left"}
                    variant="h6"
                  >
                    Age{" "}
                  </Typography>
                  <Typography
                    className={classes.subtitle}
                    align={"left"}
                    variant="h6"
                  >
                    Date{" "}
                  </Typography>
                </div>
              </div>
              <Divider />

              <div style={{ marginTop: "2em" }}>
                <TextField
                  id="standard-textarea"
                  placeholder="Prescription"
                  multiline
                  fullWidth
                />
              </div>

              <div style={{ marginTop: "4em" }}>
                <Typography
                  className={classes.subtitle}
                  align={"left"}
                  variant="h6"
                >
                  Signature{" "}
                </Typography>
                <br></br>
                <Divider style={{width:"30%"}} />

              </div>
            </Paper>
          </Grid>
        </Grid>
      </form>{" "}
      <br></br>
      <br></br>
    </Container>
  );
}

export default Prescription;
