// import { mysqlDatabase } from "../../../nessie.config.";
// import { config } from "https://deno.land/x/dotenv/mod.ts";
// const {
//   DBAAS_MYSQL_DATABASE,
//   DBAAS_MYSQL_USER,
//   DBAAS_MYSQL_PASSWORD,
//   DBAAS_MYSQL_HOSTS,
//   DBAAS_MYSQL_PORT,
// } = config();

// if (
//   !DBAAS_MYSQL_DATABASE ||
//   !DBAAS_MYSQL_USER ||
//   !DBAAS_MYSQL_PASSWORD ||
//   !DBAAS_MYSQL_HOSTS ||
//   !DBAAS_MYSQL_PORT
// ) {
//   throw new Error(`Verify that .env file exists in the env folder`);
// }

// mysqlDatabase.connection.host = DBAAS_MYSQL_HOSTS;
// mysqlDatabase.connection.port = DBAAS_MYSQL_PORT;
// mysqlDatabase.connection.user = DBAAS_MYSQL_USER;
// mysqlDatabase.connection.password = DBAAS_MYSQL_PASSWORD;
// mysqlDatabase.connection.db = DBAAS_MYSQL_DATABASE;

// export default mysqlDatabase;
