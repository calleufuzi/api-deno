import IUser from "../entities/IUser.ts";
import { loginUser, registerUser } from "../services/auth.service.ts";

const login = async ({
  response,
  request,
}: {
  response: any;
  request: any;
}) => {
  const { login, password } = request.body();
  const user = await loginUser({ login, password });
  response.body = { msg: "User logged sucefully ", user };
};

const register = async ({
  response,
  request,
}: {
  response: any;
  request: any;
}) => {
  const { login, password } = await request.body();
  const user = await registerUser({ login, password });

  response.body = { msg: "User created sucefully ", user };
};

export { login, register };
