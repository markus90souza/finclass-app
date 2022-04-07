import { useAuth } from "@hooks/useAuth";
import React from "react";

import { AppRoutes } from "./App.routes";
import { AuthRoute } from "./Auth.routes";

const Routes = () => {
  const { isLogged } = useAuth();
  return isLogged ? <AppRoutes /> : <AuthRoute />;
};

export { Routes };
