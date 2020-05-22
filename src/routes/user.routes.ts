import { Router } from "https://deno.land/x/oak/mod.ts";

import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.ts";

export const UserRouter = (prefix: string, router: Router) => {
  router
    .get(`${prefix}/users`, getUsers)
    .get(`${prefix}/users/:id`, getUser)
    .post(`${prefix}/users`, addUser)
    .put(`${prefix}/users/:id`, updateUser)
    .delete(`${prefix}/users/:id`, deleteUser);

  return router;
};
