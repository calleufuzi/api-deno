import { hash, verify } from "https://deno.land/x/argon2/lib/mod.ts";
import UserRepository from "../repositories/user.repository.ts";
import IUser from "../entities/IUser.ts";

class UsersService {
  constructor() {}
  async findByName(name: string) {
    try {
      return await UserRepository.read({ name });
    } catch (error) {
      throw error;
    }
  }

  async findByPk(id: string) {
    try {
      const user = await UserRepository.read({ id, limit: "1" });
      return user ? user[0] : {};
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await UserRepository.read();
    } catch (error) {
      throw error;
    }
  }

  async create(user: IUser) {
    try {
      const hashedPassword = await hash(user.password);

      const body = {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      };

      return await UserRepository.create(body);
    } catch (error) {
      throw error;
    }
  }
}

export default new UsersService();
