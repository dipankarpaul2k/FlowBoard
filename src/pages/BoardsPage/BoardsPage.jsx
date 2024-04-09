import { useEffect, useState } from "react";
import { Stack, Grid } from "@mui/material";
// components
import CreateBoardModal from "./CreateBoardModal";
import TopBar from "./TopBar";
import NoBoardText from "./NoBoardText";
import BoardCard from "./BoardCard";
// appwrite database service
import dbService from "../../appwrite/db";
// global store
import useFbStore from "../../stores/useStore";
import AppLoader from "../../components/layout/AppLoader";

export default function BoardsPage() {
  const { setBoards, userData, areBoardsFetched, boards } = useFbStore();

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!areBoardsFetched) {
      dbService.getAllBoards(userData.$id).then((res) => {
        // console.log("BoardsPage.jsx::res.documents > ", res.documents);
        const reversedArray = res.documents.reverse();
        setBoards(reversedArray);
      });
    } else {
      setLoading(false);
    }
  }, [areBoardsFetched]);

  if (loading) return <AppLoader />;

  return (
    <>
      <TopBar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoardText /> */}

      <Stack p={3}>
        <Grid container spacing={3}>
          {boards.map((board) => (
            <BoardCard key={board.$id} {...board} />
          ))}
        </Grid>
      </Stack>
    </>
  );
}
