import { type ReactNode, useEffect } from "react";
import { AuthProvider } from "@/context/AuthContext";
import "@/i18n/config";

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  useEffect(() => {
    // Place any one-time app bootstrap logic here (e.g. reading a stored
    // theme preference, refreshing a session token, etc.)
  }, []);

  return <AuthProvider>{children}</AuthProvider>;
}
