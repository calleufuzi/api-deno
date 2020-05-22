import { Schema } from "https://deno.land/x/nessie/mod.ts";

export const up = (schema: Schema): void => {
  schema.create("Users", (table) => {
    table.id();
    table.string("name", 30);
    table.string("email", 30).unique();
    table.string("password", 256);
    table.timestamps();
  });
};

export const down = (schema: Schema): void => {
  schema.drop("Users");
};
