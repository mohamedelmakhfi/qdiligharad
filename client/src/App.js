import React from "react";
import { RouterProvider } from "react-router-dom";
import { DIAlertProvider } from "./common/components/general/DIAlertProvider";
import { DIAuthProvider } from "./common/components/general/DIAuthProvider";
import { DIThemeProvider } from "./common/components/general/DIThemeProvider";
import '@fortawesome/fontawesome-free/css/all.min.css';

import router from "./common/router/router";
import "../src/style.css";

const App = () => {
  return (
    <DIAlertProvider>
      <DIAuthProvider>
        <DIThemeProvider>
          <RouterProvider router={router} />
        </DIThemeProvider>
      </DIAuthProvider>
    </DIAlertProvider>
  );
};

export default App;
