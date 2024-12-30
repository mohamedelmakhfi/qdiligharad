import { Box, Button } from "@mui/material";
//import pagesNotFoundImage from "../../../assets/images/pagesNotFound.png";
import ServeurErrorIcon from "../../../asset/images/ServeurErrorIcon";
import config from "../../../config";

function DFServeurErrorPage(props) {
  const { onRetour } = props;
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ServeurErrorIcon />
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
}

export default DFServeurErrorPage;
