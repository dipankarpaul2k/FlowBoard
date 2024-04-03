import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

export default function PublicRoutes({ Component }) {
  const { isLoggedIn } = useAuthStore();
  
  return isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
}
