import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  loader: true,
  isLoggedIn: false,

  setLoginStatus: (status, userData) => {
    set(
      {
        loader: false,
        isLoggedIn: status,
      },
      false,
      "setLoginStatus"
    );
  },
});

const useAuthStore = create(devtools(store));

export default useAuthStore;
