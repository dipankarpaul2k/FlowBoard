import { CircularProgress, Box } from "@mui/material";

export default function AppLoader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#1d1f26",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
