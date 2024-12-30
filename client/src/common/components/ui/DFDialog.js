import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DFDialog = (props) => {
  const { title, name, description, buttons, onClose } = props;
  const isOpen = false;
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        //dispatch(disableDialog(name));
        onClose?.();
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>{buttons.map((button, index) => button)}</DialogActions>
    </Dialog>
  );
};

export default DFDialog;
