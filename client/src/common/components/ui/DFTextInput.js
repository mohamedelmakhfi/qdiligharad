import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  Tooltip,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { useComponentStore } from "../../store/useComponentStore";
import DFFormField from "./DFFormField";
import DFIcon from "./DFIcon";

const DFTextInput = ({
  label,
  name,
  type = "text",
  variant,
  validationSchema,
  placeHolder,
  xs,
  isHidden,
  bigField = false,
  height = 40,
  endIcon,
  labelSize = 15,
  sm,
  required = false,
  tooltip,
  hiddenLabel,
  onChange,
  value,
  ...rest
}) => {
  const { addField } = useComponentStore();
  const { formName, validateField, formData } = rest;
  const [error, setError] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === "password";
  console.log("inputValue", inputValue, formData);
  const hideInput = isHidden ? isHidden() : false;

  React.useEffect(() => {
    if (type === "date" && formData && formData[name]) {
      setInputValue(formData[name].slice(0, 10));
    } else if (formData && formData[name]) {
      setInputValue(formData[name]);
    } else {
      setInputValue(value || "");
    }
  }, [formData, name, value]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = async (event) => {
    const newValue = event.target.value;
    if (validateField) {
      const error = await validateField(name, newValue, required);
      setError(error);
    } else {
      if (onChange) onChange(event.target.value);
    }
    setInputValue(newValue);
    addField(formName, { [name]: newValue });
  };

  if (hideInput) return null;

  return (
    <DFFormField xs={xs} sm={sm}>
      {!hiddenLabel && (
        <Typography
          gutterBottom
          color="primary"
          style={{
            display: "inline-flex", // Ensure elements are displayed inline
            alignItems: "center", // Align items vertically in the middle
            marginLeft: 7,
            fontSize: `${labelSize}px`,
          }}
        >
          {label} {required && <span style={{ color: "red" }}>*</span>}
          {tooltip && (
            <Tooltip title={tooltip}>
              <Box style={{ marginLeft: 3, display: "inline-block" }}>
                <DFIcon
                  icon={"QuestionMarkIcon"}
                  sx={{ height: 12, width: 12 }}
                />
              </Box>
            </Tooltip>
          )}
        </Typography>
      )}

      <TextField
        name={name}
        fullWidth
        type={isPassword ? (showPassword ? "text" : "password") : type}
        placeholder={placeHolder}
        value={inputValue}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          sx: {
            height: bigField ? `80px` : `${height}px`,
            backgroundColor: "#FFFFFF",
          },
          endAdornment: (
            <>
              {isPassword && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              {endIcon && (
                <InputAdornment position="end">{endIcon}</InputAdornment>
              )}
            </>
          ),
        }}
        error={Boolean(error)}
        helperText={error || ""}
        {...rest}
      />
    </DFFormField>
  );
};

export default DFTextInput;
