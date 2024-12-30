import { Typography } from "@mui/material";

const DFTypography = (props) => {
    const { variant, ...otherprops } = props;
    return <Typography variant={variant} {...otherprops} />;
};

export default DFTypography;