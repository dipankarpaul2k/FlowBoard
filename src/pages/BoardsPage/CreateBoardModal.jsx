import { useState } from "react";
import {
  Dialog,
  Stack,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

// import component
import ModalHeader from "../../components/utils/ModalHeader";
import { colors } from "../../theme";
import dbService from "../../appwrite/db";
import useFbStore from "../../stores/useStore";

export default function CreateBoardModal({ closeModal }) {
  const { userData, reFetchBoards } = useFbStore();
  const [boardName, setBoardName] = useState("");
  const [color, setColor] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleCreateBoard = async () => {
    try {
      setLoading(true);
      await dbService.createBoard({
        board_name: boardName,
        color: colors[color],
        user_id: userData.$id,
      });
      closeModal();
      reFetchBoards();
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <Dialog open onClose={closeModal} fullWidth maxWidth="xs">
        <Stack p={2}>
          <ModalHeader title={"Create board"} onClose={closeModal} />
          <Stack mt={3} mb={4} spacing={3}>
            <TextField
              label="Board name"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />
            <Stack direction={"row"} spacing={1.5}>
              <Typography>Colors:</Typography>
              {colors.map((clr, i) => (
                <Box
                  height={25}
                  width={25}
                  bgcolor={clr}
                  key={clr}
                  borderRadius={"50%"}
                  onClick={() => setColor(i)}
                  sx={{
                    cursor: "pointer",
                    border: color == i ? "3px solid #383838" : "none",
                    outline: `2px solid ${clr}`,
                  }}
                />
              ))}
            </Stack>
          </Stack>
          <Button
            size="large"
            variant="contained"
            disabled={loading}
            onClick={handleCreateBoard}
          >
            Create
          </Button>
        </Stack>
      </Dialog>
    </>
  );
}
