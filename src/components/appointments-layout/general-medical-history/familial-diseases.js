import React from "react";
import OurGrid from "../../grid/grid";
import Grid from "@material-ui/core/Grid";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  breath: {
    marginTop: "2em",
    textAlign: "left",
  },
  ourForm: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(300px, 1fr) )",
    placeContent: "center",
  },
}));

function FamilialDiseases() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <div className={classes.breath}>
        <Typography variant="h6" gutterBottom>
          Familial Diseases
        </Typography>

        <Typography variant="body2" gutterBottom>
          Have you or your blood relatives had any of the following (include
          grandparents, aunts and uncles, but exclude cousins, relatives by
          marriage and half-relatives)?
        </Typography>
        <br />

        <Typography variant="h6" gutterBottom>
          Check those to which the answer is yes (leave other blank).
        </Typography>
        <br />
      </div>

      <form className={classes.ourForm}>
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
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
              margin="normal"
            />
          }
          label="Heart attack under age 50"
        />
      </form>
    </div>
  );
}

export default FamilialDiseases;
