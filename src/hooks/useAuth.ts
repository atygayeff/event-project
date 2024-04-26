import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

export const useAuth = () => {
    const state = useContext(AuthContext);
    if (!state) {
      throw Error('Auth Context is not defined');
    }
    return state;
  };