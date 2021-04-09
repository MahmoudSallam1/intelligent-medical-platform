import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";



function Copyrights() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Intelligent Medical System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyrights;
