import { Box, Button } from "@mui/material";
import ErrorIcon from "../../../asset/images/errorServeur";
import config from "../../../config";

const DFNetworkErrorPage = (props) => {
  const { onRetour } = props;
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ErrorIcon />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            if (onRetour) onRetour();
          }}
        >
          Retour
        </Button>
      </Box>
    </Box>
  );
};

export default DFNetworkErrorPage;
