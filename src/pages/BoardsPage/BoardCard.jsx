import { Stack, Box, Grid, Typography, IconButton } from "@mui/material";
import { Launch } from "@mui/icons-material";

export default function BoardCard() {
  return (
    <Grid item xs={4}>
      <Stack
        p={2}
        bgcolor={"background.paper"}
        borderLeft={"5px solid"}
        borderColor={"whitesmoke"}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box width={"50%"}>
              <Typography variant="h6" fontWeight={400} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
                Board name
              </Typography>
          </Box>
          <IconButton size="small">
            <Launch />
          </IconButton>
        </Stack>
        <Typography variant="caption">Created at: 05/04/24</Typography>
      </Stack>
    </Grid>
  );
}
