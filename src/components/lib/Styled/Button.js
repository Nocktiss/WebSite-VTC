import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: "linear-gradient(45deg, orange 10%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    // top: '80vh',
    color: "black",
    height: 30,
    fontWeight: "bold",
    padding: "0 20px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || "class names"}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
