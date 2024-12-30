import React from "react";

import { Box, CircularProgress } from "@mui/material";
import HeightCalculator from "./HeightCalculator";

const DFCircular = ({ children, ...props }) => {
  const { name } = props;
  const isCircul = false
  return (
    <HeightCalculator>
      {(height) => {
        if (isCircul)
          return (
            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: height,
                }}
              >
                <CircularProgress />
              </Box>
            </div>
          );
        return <>{children}</>;
      }}
    </HeightCalculator>
  );
};

export default DFCircular;
