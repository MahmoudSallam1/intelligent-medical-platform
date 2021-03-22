import React from 'react'
import OurGrid from "../../grid/grid";
import Grid from "@material-ui/core/Grid";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";
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
    textAlign:"left"
  },

  
  ourGrid:{
  }

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
        <OurGrid className={classes.ourGrid}>
        <Grid item xs={12} md={12} lg={12}>
          <Typography
            
            align={"left"}
            variant="h7"
            bold
            gutterBottom
          >
            Check those to which the answer is yes(leave other blank).
          </Typography>
          <br/>
          <FormControlLabel
          margin="normal"
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            align={"left"}
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
            align={"left"}
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
            align={"left"}
            
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
            align={"left"}
            margin="normal"
          />
        }
        label="Heart attack under age 50"
      />
     


     </Grid>
        
      </OurGrid>
    )
}

export default FamilialDiseases