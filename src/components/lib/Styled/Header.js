import React from "react";
import PropTypes from "prop-types";

const styles = {
  header: {
    color: "white",
    fontSize: "45px",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #4774a1 10%, grey 90%)",
    // borderRadius: "40px 40px 0px 40px",
    padding: "20px",
    boxShadow: "0 3px 5px 2px rgb(190, 196, 199)",
    weight: "100vw",
  },
};

function Header(props) {
  const { classes, children, ...other } = props;

  return (
    <p style={styles.header} {...other}>
      {children || "class names"}
    </p>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default Header;
