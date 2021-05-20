import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  btn: {
    boxShadow: "none",
    height: "50px",
    marginRight: "1em",
    padding: "1em 2.5em",
    "&:hover": {
        background:"#1DB5E4"
    },
  },
}));
export default function CustomButton({ children, ...restProps }) {
  const classes = useStyles();
  return (
    <Button className={classes.btn} {...restProps}>
      {children}
    </Button>
  );
}
