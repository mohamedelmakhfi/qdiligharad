import { Alert, Snackbar } from "@mui/material";
import cuid from "cuid";
import React, { createContext, useEffect, useState } from "react";

const AlertContext = createContext();

const DIAlertProvider = ({ children }) => {
  const [alertMessages, setAlertMessages] = useState([]);

  const hideAlert = (id) => {
    setAlertMessages((prev) => prev.filter((alert) => alert.id !== id));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (alertMessages.length > 0) {
        hideAlert(alertMessages[0].id);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [alertMessages]);

  const showAlert = (type, message) => {
    const newAlert = {
      id: cuid(),
      type,
      message,
    };
    setAlertMessages((prev) => [...prev, newAlert]);
  };

  const contextValue = {
    showAlert,
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {alertMessages.map((alert) => (
        <Snackbar
          key={alert.id}
          open={true}
          autoHideDuration={3000}
          onClose={() => hideAlert(alert.id)}
        >
          <Alert
            severity={alert.type}
            onClose={() => hideAlert(alert.id)}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      ))}
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, DIAlertProvider };
