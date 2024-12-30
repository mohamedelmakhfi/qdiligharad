import { Button } from "@mui/material";
import React from "react";
import DFGrid from "./DFGrid";
import DFIcon from "./DFIcon";

const DFButton = ({
  type,
  color = 'primary',
  startIcon,
  endIcon,
  variant = 'outlined',
  title,
  onClick,
  xs,
  gridProps,
  gridSx,
  buttonSx,
  children,
  ...props
}) => {
  const _title = title?.split(".")[title.split(".").length - 1];
  const handleClick = (event) => {
    event.stopPropagation();
    if (type === 'submit' && props.handleSubmit) {
      props.handleSubmit();
    }
    if (onClick) {
      onClick();
    }
  };

  const buttonProps = {
    variant,
    onClick: handleClick,
    startIcon: <DFIcon icon={startIcon} />,
    endIcon: <DFIcon icon={endIcon} />,
    sx: {
      fontSize: "0.8rem",
      padding: "2px 12px",
      border: variant !== "text" ? "2px solid #25384a" : "none",
      background: variant === "text" ? "transparent" : "none",
      fontWeight: "bold",
      textTransform: "none",
      textDecoration: variant === "text" ? "underline" : "none",
      "&:hover": {
        border: variant !== "text" ? "2px solid #25384a" : "none",
        background: variant === "text" ? "transparent" : "none",
        textDecoration: variant === "text" ? "underline" : "none",
        color: variant === "text" ? "#25384acc" : undefined,
      },
      "&:focus": {
        border: variant !== "text" ? "2px solid #25384a" : "none",
        background: variant === "text" ? "transparent" : "none",
        textDecoration: variant === "text" ? "underline" : "none",
        color: variant === "text" ? "#25384acc" : undefined,
      },
      boxShadow: "none",
      ...buttonSx,
    },
    ...props,
  };

  return (
    <DFGrid item xs={xs} sx={gridSx} {...gridProps}>
      <Button {...buttonProps}>{_title}</Button>
    </DFGrid>
  );
};

export default DFButton;
