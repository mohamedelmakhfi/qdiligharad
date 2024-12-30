import React from "react";
import Grid from "@mui/material/Grid";

const DFGrid = ({ container, item, xs, sx, spacing, children, ...props }) => {
  if (container) {
    return (
      <Grid container spacing={spacing} sx={sx}  {...props}>
        {children}
      </Grid>
    );
  } else if (item) {
    return (
      <Grid item xs={xs} sx={sx} {...props}>
        {children}
      </Grid>
    );
  } else {
    // By default, if neither container nor item prop is specified, assume it's a container
    return (
      <Grid container spacing={spacing} sx={sx}  {...props}>
        {children}
      </Grid>
    );
  }
};

export default DFGrid;
