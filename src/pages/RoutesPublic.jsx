import { Navigate, Outlet, useLocation } from "react-router";
import { useContextApp } from "../context/ContextApp";
import { useEffect, useState } from "react";

function ProtectedRoutes() {
  const { userAuth, validateToken } = useContextApp();
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // Obtener la ruta actual

  useEffect(() => {
    const checkAuth = async () => {
      await validateToken(); // Verifica el token
      setLoading(false); // Una vez validado, actualiza el estado
    };
    checkAuth();
  }, [validateToken]);

  if (loading) return <p>Cargando...</p>;

  // Si el usuario está autenticado y está en "/login" o "/"
  if (userAuth) {
    return <Navigate to="/home" replace />;
  }

  // Si no está autenticado y está en una ruta protegida, redirigirlo a "/"
  if (!userAuth && location.pathname !== "/login") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoutes;
