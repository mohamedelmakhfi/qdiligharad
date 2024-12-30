import { FormLabel } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import frLocale from "date-fns/locale/fr";
import React from "react";
import DFTextInput from "./DFTextInput";
import DFFormField from "./DFFormField";

const DFDateInput = ({
  label,
  name,
  ref,
  formName,
  value,
  xs,
  sm,
  hiddenLabel,
  error,
  height,
  onChange,
  ...restProps
}) => {
  const handleChange = (newValue) => {
    
  }
  return (
    <DFFormField xs={xs} sm={sm}>
      {!hiddenLabel && <FormLabel>{label}</FormLabel>}
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={frLocale}
      >
        <DateTimePicker
          value={value}
          onChange={handleChange}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "&:hover > fieldset": {
                border: error ? "1px solid red" : "1px solid gray",
              },
              fieldset: { border: error ? "1px solid red" : "1px solid gray" },
              height: `${height}px`,
              borderRadius: "4px",
              backgroundColor: "#F6F6F6",
              "&.Mui-focused fieldset": {
                border: error ? "1px solid red" : "1px solid gray",
              },
            },
          }}
          renderInput={(params) => <DFTextInput {...params} />}
          {...restProps}
        />
      </LocalizationProvider>
    </DFFormField>
  );
};

export default DFDateInput;
