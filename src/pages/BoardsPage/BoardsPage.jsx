import { useState } from "react";
import CreateBoardModal from "./CreateBoardModal";
import TopBar from "./TopBar";

import NoBoardText from "./NoBoardText";

export default function BoardsPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TopBar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      <NoBoardText />
    </>
  );
}

