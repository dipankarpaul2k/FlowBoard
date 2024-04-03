import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// mui library
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

// auth service
import authService from "./appwrite/auth";

// auth store
import useAuthStore from "./stores/authStore";

// route guards
import PublicRoutes from "./route_guards/PublicRoutes";
import PrivateRoutes from "./route_guards/PrivateRoutes";

// pages
import { AuthPage, BoardsPage } from "./pages";

// components
import AppLoader from "./components/layout/AppLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoutes Component={AuthPage} />,
  },
  {
    path: "/boards",
    element: <PrivateRoutes Component={BoardsPage} />,
  },
]);

function App() {
  const setLoginStatus = useAuthStore((s) => s.setLoginStatus);
  const loader = useAuthStore((s) => s.loader);

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      setLoginStatus(!!userData);
    });
  }, []);

  if (loader) return <AppLoader />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
