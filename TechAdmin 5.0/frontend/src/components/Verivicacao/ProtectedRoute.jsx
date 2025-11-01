// importação
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // se não tiver token, redireciona pro login
    return <Navigate to="/" replace />;
  }

  // se tiver token, mostra a página normalmente
  return children;
}