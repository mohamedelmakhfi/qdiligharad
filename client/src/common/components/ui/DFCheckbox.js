import { Checkbox } from "@mui/material";

const DFCheckbox = (props) => {
  const { id, ...otherprops } = props;
  return <Checkbox {...otherprops} />;
};

export default DFCheckbox;
