import { hash, verify } from "https://deno.land/x/argon2/lib/mod.ts";

export const loginUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  // getUserByUserName()
};

export const registerUser = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const hashedPassword = await hash(password);

};
