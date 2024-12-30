import React from "react";
import Button from "@mui/material/Button";

const DFTableAction = ({ onClick, title, children }) => {
  return (
    <Button onClick={onClick} variant="contained" color="primary">
      {children}
      {title}
    </Button>
  );
};

export default DFTableAction;
