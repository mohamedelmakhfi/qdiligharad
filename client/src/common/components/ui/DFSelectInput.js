import { useTheme } from "@emotion/react";
import {
  Box,
  Chip,
  CircularProgress,
  FormHelperText,
  InputAdornment,
  MenuItem,
  Typography,
  styled,
} from "@mui/material";
import Select from "@mui/material/Select";
import cuid from "cuid";
import React, { useEffect } from "react";
import { useComponentStore } from "../../store/useComponentStore";
import getReferentielData, {
  getReferentielDataFromServer,
} from "../general/AxiosReferencielInterceptor";
import DFFormField from "./DFFormField";

const StyledSelect = styled(Select)(({ theme }) => ({
  "&:focus": {
    backgroundColor: "transparent", // Removes the native select focus highlight
  },
  "&:hover": {
    backgroundColor: "transparent", // Removes the native select hover effect
  },
  "&::after": {
    display: "none", // Hides the native select arrow
  },
  // Additional styles as needed
}));

const CustomBox = styled(Box)`
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  max-width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;
  margin-top: 2px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  -ms-overflow-style: -ms-autohiding-scrollbar;
`;

const DFSelectInput = ({
  label,
  name,
  type = "text",
  variant,
  formName,
  defaultValue,
  optionsData,
  optionsProvider,
  isHidden,
  apiOptions,
  required = false,
  multiple = false,
  renderOptionValue = "description",
  endIcon,
  height = 40,
  reference,
  xs,
  sm,
  hiddenLabel,
  onChange,
  labelSize = 15,
  ...rest
}) => {
  const theme = useTheme();
  const { addField } = useComponentStore();

  const { formData, validateField } = rest;
  const [value, setValue] = React.useState(multiple ? [] : "");
  const [error, setError] = React.useState(null);
  const [options, setOptions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const hideInput = isHidden ? isHidden() : false;

  const borderStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: error ? "1px solid red" : "1px solid gray",
      },
      "&:hover fieldset": {
        border: error ? "1px solid red" : "1px solid gray",
      },
      "&.Mui-focused fieldset": {
        border: error ? "1px solid red" : "1px solid gray",
      },
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },
  };

  useEffect(() => {
    if (formData?.[name]) {
      setValue(formData?.[name]);
    } else {
      setValue(multiple ? [] : "");
    }
  }, [formData?.[name]]);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    } else if (multiple && !Array.isArray(value)) {
      setValue([]);
    }
  }, [defaultValue]);

  useEffect(() => {
    const fetchOptions = async () => {
      if (reference) {
        try {
          const response = await getReferentielData(reference);
          setOptions(response.results);
        } catch (_error) {
          console.error("Failed to fetch options:", _error);
          setOptions([]);
          setError(_error.message);
        }
      } else if (apiOptions) {
        try {
          //dispatch(runCircular(apiOptions.circulare));
          const response = await getReferentielDataFromServer(
            apiOptions.api,
            apiOptions.body
          );
          setOptions(response.body);

          apiOptions?.afterFetching?.(response.body);

          //dispatch(circularOff(apiOptions.circulare));
        } catch (_error) {
          console.error("Failed to fetch options:", _error);
          setOptions([]);
          setError(_error.message);
        }
      } else {
        setOptions(optionsData || []);
      }
      setIsLoading(false);
    };
    fetchOptions();
  }, [reference, optionsData]);

  const deleteItem = async (item) => {
    const newValue = value.filter((i) => i !== item);
    setValue(newValue);
    addField(formName, { [name]: newValue });
    const error = await validateField(name, newValue, required);
    if (error) {
      setError(error);
    } else {
      setError(null);
    }
  };

  const handleChange = async (event) => {
    let newValue;
    if (multiple) {
      newValue = event.target.value || [];
      if (onChange) onChange(newValue);
    } else {
      newValue = event.target.value;
      if (onChange)
        onChange(options.filter((option) => option.id === newValue)[0]);
    }
    addField(formName, { [name]: newValue });
    const error = await validateField(name, newValue, required);
    if (error) {
      setError(error);
    } else {
      setError(null);
    }
    setValue(newValue);
  };
  if (hideInput) return null;
  return (
    <DFFormField xs={xs} sm={sm} fullWidth>
      {!hiddenLabel && (
        <Typography
          gutterBottom
          color="primary.main"
          style={{
            marginLeft: 7,
            fontSize: `${labelSize}px`,
          }}
        >
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </Typography>
      )}
      <SelectInput
        {...rest}
        value={value}
        handleChange={handleChange}
        isLoading={isLoading}
        options={options}
        height={height}
        multiple={multiple}
        deleteItem={deleteItem}
        borderStyles={borderStyles}
        renderOptionValue={renderOptionValue}
        endIcon={endIcon}
        error={error}
      />
      {error && <FormHelperText sx={{ color: "red" }}>{error}</FormHelperText>}
    </DFFormField>
  );
};

const SelectInput = ({ selectType, ...props }) => {
  switch (selectType) {
    default:
      return <SimpleSelectInput {...props} />;
  }
};

const SimpleSelectInput = ({ deleteItem, ...props }) => {
  const EndPoint = () => {
    if (props.isLoading) {
      return (
        <InputAdornment position="end">
          <CircularProgress size={16} />
        </InputAdornment>
      );
    } else if (props.endIcon) {
      return <InputAdornment position="end">{props.endIcon}</InputAdornment>;
    }
  };
  return (
    <StyledSelect
      id="demo-simple-select-standard"
      sx={{
        height: `${props.height}px`,
        backgroundColor: "#FFFFFF",
        ...props.borderStyles,
      }}
      value={props.value}
      label={props.label}
      onChange={props.handleChange}
      fullWidth
      displayEmpty
      inputProps={props.isLoading ? { IconComponent: () => null } : {}}
      renderValue={(selected) => {
        if (selected?.length === 0 && props.placeholder) {
          return <em>{props.placeholder}</em>;
        }
        if (props.multiple) {
          let selectArray = Array.isArray(selected) ? selected : [selected];
          return (
            <CustomBox>
              {selectArray?.map((item) => {
                let itemLabel = props.options.filter(
                  (option) => option.id === item
                )[0].description;
                return (
                  <Chip
                    key={cuid()}
                    label={itemLabel}
                    onDelete={(e) => {
                      deleteItem(item);
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  />
                );
              })}
            </CustomBox>
          );
        }
        if (props.renderOptionValue && props.options)
          return props.options.filter((option) => option.id === selected)[0]?.[
            props.renderOptionValue
          ];
        return selected;
      }}
      endAdornment={<EndPoint />}
      error={props.error ? true : false}
      {...props}
    >
      {props.options.map((option) => (
        <MenuItem value={option.id}>{option.description}</MenuItem>
      ))}
    </StyledSelect>
  );
};

export default DFSelectInput;
