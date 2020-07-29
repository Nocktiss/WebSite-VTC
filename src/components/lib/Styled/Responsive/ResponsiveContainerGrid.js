import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ResponsiveConstants from "../../../../config/_constants";

const styleSheet = (theme) => ({
  root: {
    [theme.breakpoints.up(ResponsiveConstants.mobileBreakpoint)]: {
      "min-width": 600,
      // marginBottom: 0,
    },
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
});

function ResponsiveContainerGrid({ classes, children }) {
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      {children}
    </Grid>
  );
}

export default withStyles(styleSheet)(ResponsiveContainerGrid);
