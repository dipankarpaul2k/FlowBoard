import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  // <-----STATES----->
  // Auth states
  loader: true,
  isLoggedIn: false,
  userData: null,
  // Boards states
  boards: [],
  areBoardsFetched: false,
  // Tasks states

  // <-----METHODS----->
  // Auth methods
  setLoginStatus: (status, userData) => {
    set(
      {
        loader: false,
        isLoggedIn: status,
        userData: userData,
      },
      false,
      "setLoginStatus"
    );
  },
  // Boards methods
  setBoards: (boards) => {
    set({ boards, areBoardsFetched: true }, false, "setBoards");
  },
  reFetchBoards: () => {
    set({ areBoardsFetched: false }, false, "reFetchBoards");
  },
});

const useFbStore = create(devtools(store));

export default useFbStore;
