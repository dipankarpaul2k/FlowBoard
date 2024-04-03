import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/authStore";

export default function PrivateRoutes({Component}) {
  const { isLoggedIn } = useAuthStore();

  return !isLoggedIn ? <Navigate to="/" replace /> : <Component />;
}
