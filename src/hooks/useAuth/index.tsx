import { useContext } from "react";
import { AuthContext } from "@contexts/Auth";

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Wrap useAuth with Provider");
  }
  return context;
};

export { useAuth };
