import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import getReferentielData, {
  getReferentielDataFromServer,
} from "../general/AxiosReferencielInterceptor";

import { CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DFFormField from "./DFFormField";
import { useComponentStore } from "../../store/useComponentStore";

const DFAutocompletInput = ({
  label,
  //options,
  onChange,
  allowTyping = true,
  height = 40,
  name,
  formName,
  optionsData,
  width = null,
  apiOptions,
  isHidden,
  labelSize = 15,
  getOptionLabel = (option) => option?.label,
  getOptionRenderer = (option) => option?.id,
  required = false,
  hiddenLabel,
  defaultRendred,
  labelRendred = "description",
  valueRendred = "id",
  mode,
  xs,
  sm,
  reference,
  placeholder,
  formData,
  validateField,
  ...restProps
}) => {
  const { addField } = useComponentStore();
  const theme = useTheme();
  const [options, setOptions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState();
  const [page, setPage] = React.useState(0);
  const pageSize = 10;

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
  };
  React.useEffect(() => {
    let option = options.filter((o) => o.value == formData?.[name]);
    if (mode == "service" && formData?.[name]) {
      setValue({
        label: formData?.[defaultRendred],
        value: formData?.[name],
      })
    } else {
      setValue(option?.[0]);
    }
  }, [formData?.[name], options]);

  React.useEffect(() => {
    setValue(formData?.[name]);
  }, [formData?.[name]]);
  React.useEffect(() => {
    const fetchOptions = async () => {
      if (reference) {
        try {
          const response = await getReferentielData(reference);
          setOptions(
            response.results.map((elm) => ({
              label: elm[labelRendred],
              value: elm[valueRendred],
            }))
          );
        } catch (error) {
          console.error("Failed to fetch options:", error);
          setError("error reseau");
          setOptions([]);
        }
      } else if (apiOptions && mode != "service") {
        try {
          //dispatch(runCircular(apiOptions.circulare));
          const response = await getReferentielDataFromServer(
            apiOptions.api,
            apiOptions.body
          );
          setOptions(
            response?.body?.map((elm) => ({
              label: elm[labelRendred],
              value: elm[valueRendred],
            }))
          );

          apiOptions?.afterFetching?.(response.body);

          //dispatch(circularOff(apiOptions.circulare));
        } catch (error) {
          console.error("Failed to fetch options:", error);
          setError("error reseau");
          setOptions([]);
        }
      } else {
        setOptions(optionsData || []);
      }
      setIsLoading(false);
    };
    fetchOptions();
  }, [reference, optionsData]);

  const isOptionEqualToValue = (option, value) => {
    return option.value === value.value;
  };

  const handleChange = async (value) => {
    addField(formName, { [name]: value });
    const error = await validateField(name, value, required);
    if (error) {
      setError(error);
    } else {
      setError(null);
    }
    if (onChange) onChange?.(value);
  };

  const handleInputChange = async (value) => {
    if (mode === "service" && !reference && value.length > 2) {
      try {
        //dispatch(runCircular(apiOptions.circulare));
        let body = {
          ...apiOptions.body,
          description: value,
          page: page,
          pageSize: pageSize,
        };
        const response = await getReferentielDataFromServer(apiOptions.api, {
          ...body,
        });
        setOptions(
          response?.body?.map((elm) => ({
            label: elm[labelRendred],
            value: elm[valueRendred],
          }))
        );

        apiOptions?.afterFetching?.(response.body);

        //dispatch(circularOff(apiOptions.circulare));
      } catch (error) {
        console.error("Failed to fetch options:", error);
        setError("error reseau");
        setOptions([]);
      }
    }
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
      <Autocomplete
        fullWidth={width === null}
        sx={{
          width: width !== null ? `${width}px` : undefined,
        }}
        options={options}
        onChange={(event, newValue) => handleChange(newValue)}
        value={value || null}
        getOptionLabel={getOptionLabel}
        isOptionEqualToValue={isOptionEqualToValue}
        inputProps={isLoading ? { IconComponent: () => null } : {}}
        renderInput={(params) => (
          <TextField
            fullWidth
            placeholder={placeholder}
            onChange={(e) => handleInputChange(e.target.value)}
            {...params}
            {...restProps}
            InputProps={{
              ...params.InputProps,
              sx: {
                alignContent: "center",
                color: theme.palette.text.primary,
                height: `${height}px`,
                "& .MuiSvgIcon-root": {
                  color: theme.palette.primary.main,
                },
                backgroundColor: "#FFFFFF",
                ...borderStyles,
              },
              endAdornment: (
                <React.Fragment>
                  {isLoading && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps?.endAdornment}
                </React.Fragment>
              ),
            }}
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              "& .MuiInputBase-root": {
                color: theme.palette.text.primary,
              },
              "& .MuiInputLabel-root": {
                color: theme.palette.text.primary,
              },
              ...borderStyles,
            }}
            error={error ? true : false}
            helperText={error}
          />
        )}
        {...restProps}
      />
    </DFFormField>
  );
};

export default DFAutocompletInput;
