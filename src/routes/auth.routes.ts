import { Router } from "https://deno.land/x/oak/mod.ts";

import { login, register } from "../controllers/auth.controller.ts";

export const AuthRouter = (router: Router) => {
  router.post("/login", login).post("/register", register);
  return router;
};
