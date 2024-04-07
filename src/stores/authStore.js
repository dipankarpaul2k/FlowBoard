import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  loader: true,
  isLoggedIn: false,
  userData: null,

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
});

const useAuthStore = create(devtools(store));

export default useAuthStore;
