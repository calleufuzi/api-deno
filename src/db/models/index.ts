import mysql from "../conections/mysql.ts";
import Users from "./users.model.ts";

const connection = await mysql;

let db = {
  Users,
};

db.Users = Users;


export default db;
