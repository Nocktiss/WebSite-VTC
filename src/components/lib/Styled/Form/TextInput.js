import React from "react";
import PropTypes from "prop-types";
// Custom components
import TextField from "@material-ui/core/TextField";
// Validate component
import schemaValidate from "../../../services/schemaValidate";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

// const styles = {
//   root: {
//     background: "white",
//   },
//   input: {
//     color: "#d4af37",
//   },
// };

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const TextInput = ({
  properties,
  field,
  label,
  defaultValue,
  params,
  classes,
  ...rest
}) => {
  const { register, errors, clearError, schema } = properties;
  return (
    <ThemeProvider theme={theme}>
      <TextField
        error={errors[field] && true}
        helperText={errors[field] && errors[field].message}
        name={field}
        id={field}
        label={label}
        defaultValue={defaultValue}
        fullWidth
        variant="outlined"
        // className={classes.root}
        onFocus={() => clearError(field)}
        inputRef={register({
          validate: (value) => schemaValidate(value, field, schema, params),
        })}
        {...rest}
      />
    </ThemeProvider>
  );
};

TextInput.propTypes = {
  classes: PropTypes.object.isRequired,
  properties: PropTypes.shape({
    register: PropTypes.func,
    errors: PropTypes.object,
    clearError: PropTypes.func,
    schema: PropTypes.shape({
      yupValidations: PropTypes.object,
      customValidations: PropTypes.object,
    }),
  }).isRequired,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  params: PropTypes.shape(),
};

TextInput.defaultProps = {
  type: "text",
  defaultValue: "",
  params: null,
};
export default TextInput;
