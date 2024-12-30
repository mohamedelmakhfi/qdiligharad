import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { deDE } from "@mui/x-date-pickers/locales";
import React from "react";

const theme = createTheme({
  palette: {
    mode: "light", // or 'dark' as per your preference
    primary: {
      main: "#b4c5e4",
    },
    secondary: {
      main: "#000",
    },
    deDE,
  },
});

const DIThemeProvider = ({ children }) => {
  //make LocalizationProvider locale fr DD/MM/YYYY HH:mm SS SSS
  // const locale = "fr";
  if (!children) {
    return null;
  }
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={"fr"}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LocalizationProvider>
  );
};

export { DIThemeProvider };
