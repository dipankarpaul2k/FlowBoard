import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/useStore";

export default function PublicRoutes({ Component }) {
  const { isLoggedIn } = useAuthStore();
  
  return isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
}
