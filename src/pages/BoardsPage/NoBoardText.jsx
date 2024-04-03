import { Stack, Typography } from "@mui/material";

export default function NoBoardText() {
  return (
    <Stack mt={8} alignItems={"center"}>
      <Typography variant="h5">No boards created</Typography>
      <Typography variant="h6">Create your first board today!</Typography>
    </Stack>
  );
}
