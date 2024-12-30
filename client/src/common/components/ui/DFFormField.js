import { FormControl } from "@mui/material";
import DFGrid from "./DFGrid";

const DFFormField = ({ children, ...props }) => {
  const { xs, sm, ...otherprops } = props;
  return (
    <DFGrid item xs={xs} sm={sm} {...otherprops}>
      <FormControl sx={{ width: "100%" }}>{children}</FormControl>
    </DFGrid>
  );
};

export default DFFormField;
