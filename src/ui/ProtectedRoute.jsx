import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) {
        navigate("/login");
      }
    },
    [isLoading, isAuthenticated, navigate]
  );

  if (isLoading) return <h2>Loading!</h2>;

  if (isAuthenticated) return children;
}
