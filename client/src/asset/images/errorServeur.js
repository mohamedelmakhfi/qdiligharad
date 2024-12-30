import React from "react";

const ErrorIcon = ({ style = {}, height = 124, width = 124 }) => (
  <div class="MuiBox-root css-1fpp2g6">
    <h2 class="MuiTypography-root MuiTypography-h2 css-12a5axs-MuiTypography-root">
      <svg
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1d5acr-MuiSvgIcon-root"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        height={height}
        width={width}
        color="#232F66"
        data-testid="ErrorIcon"
        style={{ fill: "#232F66", marginLeft: "45%", ...style }}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
      </svg>
    </h2>
    <h3 class="MuiTypography-root MuiTypography-h3 css-gge8r6-MuiTypography-root">
      Une erreur inconnue est survenue, veuillez réessayer plus tard ou
      contacter le service clientèle.
    </h3>
  </div>
);

export default ErrorIcon;
