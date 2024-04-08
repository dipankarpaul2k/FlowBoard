import { Stack, Box, Grid, Typography, IconButton } from "@mui/material";
import { Launch } from "@mui/icons-material";
import { formatDate } from "../../helperFn";

export default function BoardCard(props) {
  return (
    <Grid item xs={4} sx={{ cursor: "pointer" }}>
      <Stack
        p={2}
        bgcolor={"background.paper"}
        borderLeft={"5px solid"}
        borderColor={props.color}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box width={"50%"}>
            <Typography
              variant="h6"
              fontWeight={400}
              whiteSpace={"nowrap"}
              overflow={"hidden"}
              textOverflow={"ellipsis"}
            >
              {props.board_name}
            </Typography>
          </Box>
          <IconButton size="small">
            <Launch />
          </IconButton>
        </Stack>
        <Typography variant="caption">
          Created at: {formatDate(props.$createdAt)}
        </Typography>
      </Stack>
    </Grid>
  );
}
