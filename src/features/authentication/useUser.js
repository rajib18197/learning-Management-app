import { useState } from "react";
import { useGetCurrentUserQuery } from "./authApi";

export function useUser() {
  const [user, setUser] = useState(() => {
    const storage = localStorage.getItem("user");
    if (!storage) return undefined;
    return JSON.parse(storage);
  });

  const {
    data: currentUser,
    isLoading,
    isError,
    error,
  } = useGetCurrentUserQuery(user?.id, { skip: !user?.id });

  console.log(currentUser);

  return { currentUser, isLoading, isAuthenticated: currentUser?.id, isError };
}
