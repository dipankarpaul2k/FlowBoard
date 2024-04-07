import { useState } from "react";
import CreateBoardModal from "./CreateBoardModal";
import TopBar from "./TopBar";

import NoBoardText from "./NoBoardText";

import { Stack, Box, Grid, Typography, IconButton } from "@mui/material";
import { Launch } from "@mui/icons-material";
import BoardCard from "./BoardCard";

export default function BoardsPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TopBar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoardText /> */}

      <Stack p={3}>
        <Grid container spacing={3}>
          <BoardCard />
        </Grid>
      </Stack>
    </>
  );
}
