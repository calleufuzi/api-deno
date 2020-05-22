import { config } from "https://deno.land/x/dotenv/mod.ts";
const {
  DBAAS_MYSQL_DATABASE,
  DBAAS_MYSQL_USER,
  DBAAS_MYSQL_PASSWORD,
  DBAAS_MYSQL_HOSTS,
  DBAAS_MYSQL_PORT,
} = config();

if (
  !DBAAS_MYSQL_DATABASE ||
  !DBAAS_MYSQL_USER ||
  !DBAAS_MYSQL_PASSWORD ||
  !DBAAS_MYSQL_HOSTS ||
  !DBAAS_MYSQL_PORT
) {
  throw new Error(`Verify that .env file exists in the env folder`);
}

const configMySql = {
  migrationFolder: `./src/db/migrations/mysql`,
  connection: {
    hostname: "",
    port: 3306,
    username: "",
    password: "",
    db: "",
  },
  dialect: "mysql",
};

configMySql.connection.hostname = DBAAS_MYSQL_HOSTS;
configMySql.connection.port = parseInt(DBAAS_MYSQL_PORT);
configMySql.connection.username = DBAAS_MYSQL_USER;
configMySql.connection.password = DBAAS_MYSQL_PASSWORD;
configMySql.connection.db = DBAAS_MYSQL_DATABASE;

export default configMySql;
