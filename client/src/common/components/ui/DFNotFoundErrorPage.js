import { Box, Button } from "@mui/material";
//import pagesNotFoundImage from "../../../assets/images/pagesNotFound.png";
import config from "../../../config";
import PageNotFoundError from "../../../asset/images/PageNotFoundError";

function DFNotFoundErrorPage(props) {
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
        <PageNotFoundError />
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

export default DFNotFoundErrorPage;
