import db from "../db/models/index.ts";
import { Where, QueryOptions } from "https://deno.land/x/dso@v1.0.0/mod.ts";
import IUser from "../entities/IUser.ts";

class UserRepository {
  constructor() {}

  create(user: IUser) {
    return db.Users.insert(user);
  }

  read(filters?: any, attributes?: string) {
    const options: QueryOptions = {
      fields: ["id", "name", "email", "created_at", "updated_at"],
    };

    if (attributes) {
      options.fields = attributes.replace(/(^,|,$)/gi, "").split(",");
    }

    if (filters?.id) {
      options.where = Where.eq("id", filters.id);
    }

    if (filters?.name) {
      options.where = Where.eq("name", filters.name);
    }

    if (filters?.email) {
      options.where = Where.eq("email", filters.email);
    }

    if (filters?.search) {
      options.where = Where.like("name", "filters.search");
    }

    if (filters?.order) {
      options.order = filters.order.split(":");
    }

    if (filters?.limit) {
      const limit = filters.limit.split(":");

      if (limit?.lenght > 1) {
        options.limit = [parseInt(limit[0]), parseInt(limit[1])];
      } else {
        options.limit = [0, parseInt(filters.limit)];
      }
    }

    return db.Users.findAll(options);
  }

  update() {}

  delete() {}
}

export default new UserRepository();
