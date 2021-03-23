import React from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { patientGeneralMedicalHistoryArray } from "./medical-history-array";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  breath: {
    marginTop: "1em",
    textAlign: "left",
  },
  ourForm: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
    placeContent: "center",
  },
  ourFlex: {
    display: "flex",
    flexDirection: "row",
  },
}));

function MedicalHistory() {
  const classes = useStyles();
  // const [value, setValue] = React.useState();

  // const handleChangeR = (event) => {
  //   setValue(event.target.value);
  // };

  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className={classes.breath}>
        <Typography variant="h6" gutterBottom>
          Are you allergic to any of the following?
        </Typography>
        <br />
      </div>

      <form className={classes.ourForm}>
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              color="primary"
            />
          }
          label="Heart attack under age 50"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Aspirin"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedC}
              onChange={handleChange}
              name="checkedC"
              color="primary"
            />
          }
          label="Aspirin"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedD}
              onChange={handleChange}
              name="checkedD"
              color="primary"
              margin="normal"
            />
          }
          label="Aspirin"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedE}
              onChange={handleChange}
              name="checkedE"
              color="primary"
              margin="normal"
            />
          }
          label="Aspirin"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedF}
              onChange={handleChange}
              name="checkedF"
              color="primary"
              margin="normal"
            />
          }
          label="Aspirin"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
              color="primary"
              margin="normal"
            />
          }
          label="Aspirin"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedH}
              onChange={handleChange}
              name="checkedH"
              color="primary"
              margin="normal"
            />
          }
          label="Heart operations"
        />
        <FormControlLabel
          margin="normal"
          control={
            <Checkbox
              checked={state.checkedI}
              onChange={handleChange}
              name="checkedI"
              color="primary"
              margin="normal"
            />
          }
          label="Aspirin"
        />
      </form>
      <div className={classes.breath}>
        <Typography variant="h6" gutterBottom>
          Do you have, or have you had, any of the following?
        </Typography>
      </div>

      
        <Grid container>
          {patientGeneralMedicalHistoryArray.slice(0, 20).map((item) => (
            <Grid key={item.id} item xs={6} sm={4} md={4} lg={3}>
              <FormLabel className={classes.breath} component="legend">
                {item.question}
              </FormLabel>
              <RadioGroup className={classes.ourFlex}>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </Grid>
          ))}
        </Grid>
      
    </div>
  );
}

export default MedicalHistory;
