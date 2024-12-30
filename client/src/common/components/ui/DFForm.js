import React, { useEffect } from "react";
import { FIELD_REQUIRED } from "../../constants/validationErrors";
import { useAlert } from "../../hooks/useAlert";
import { useComponentStore } from "../../store/useComponentStore";
import DFGrid from "./DFGrid";

const DFForm = ({
  children,
  classes,
  initialValues,
  name,
  innerRef,
  sx,
  handleSubmit,
  validationSchema,
  autoValidation = false,
  handleReset,
  isSubmitting,
}) => {
  const { form, setForm } = useComponentStore();
  const { showAlert } = useAlert();
  const [values, setValues] = React.useState(initialValues);

  useEffect(() => {
    if (!name) {
      showAlert(
        "error",
        "Error technique est survenue, veuillez reessayer plus tard ou contacter le service client."
      );
      return null;
    }
    if (!form) {
      setForm(name, values );
    }
  }, []);
  const submitThisForm = () => {
    if (autoValidation) {
      let errors = formValidation(form?.[name]) || [];
      if (errors.length > 0) {
        showAlert("error", errors[0]);
      } else {
        handleSubmit(form?.[name]);
      }
    } else {
      handleSubmit(form?.[name]);
    }
  };
  const formValidation = (values) => {
    try {
      validationSchema?.validateSync(values, {
        abortEarly: false,
      });
      return {};
    } catch (error) {
      const formattedErrors = [];
      if (error.inner) {
        error.inner?.forEach((err) => {
          const message = err.message;
          formattedErrors.push(`${err.path}: ${message}`);
        });
      } else {
        formattedErrors.push(`error est survenue`);
      }

      return formattedErrors;
    }
  };

  const validateField = async (fieldName, value, require = false) => {
    if (validationSchema?._nodes.includes(fieldName)) {
      try {
        await validationSchema?.validateAt(fieldName, { [fieldName]: value });
      } catch (error) {
        return error.message;
      }
    } else if (require && !value) {
      return FIELD_REQUIRED;
    }
  };
  console.log("DFForm  form", form, name);
  const addPropsToChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      formName: name,
      handleSubmit: submitThisForm,
      validateField: validateField,
      formData: form?.[name],
    });
  });

  return (
    <DFGrid container spacing={1} sx={{ ...sx }}>
      {addPropsToChildren}
    </DFGrid>
  );
};

export default DFForm;
