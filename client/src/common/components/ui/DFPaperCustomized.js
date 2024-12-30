import { Box, Paper, Typography } from "@mui/material";

function DFPaperCustomized({
  children,
  title,
  titleStyle,
  titleHidden = false,
  forActions,
}) {
  return (
    <Paper
      sx={{
        backgroundColor: "#f1f1f1",
        border: "1px solid",
        borderRadius: "5px",
        borderColor: "rgb(182, 182, 182)",
        position: "relative",
        minWidth: "335px",
      }}
      elevation={1}
    >
      <Box
        sx={{
          position: "absolute",
          left: "30px",
          transform: "translate(0px,-50%)",
        }}
      >
        <Box
          sx={
            (title || titleHidden) && {
              position: "absolute",
              transform: "translateY(-50%)",
              backgroundColor: "rgb(241, 241, 241)",
              height: "4px",
              width: "100%",
              top: "50%",
              zIndex: -1,
              ...titleStyle,
            }
          }
        ></Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "600",
            textAlign: "center",
            paddingLeft: "8px",
            paddingRight: "8px",
            margin: "0px",
            lineHeight: "1.2",
            color: "primary.main",
          }}
        >
          {!titleHidden && title}
        </Typography>
      </Box>
      <Box
        sx={
          forActions === true
            ? {
                width: "98%",
                marginLeft: 1,
                marginTop: 1,
                marginBottom: 1,
              }
            : {
                marginLeft: 1,
                marginTop: 3,
                marginBottom: 3,
                width: "98%",
              }
        }
      >
        {children}
      </Box>
    </Paper>
  );
}

export default DFPaperCustomized;
