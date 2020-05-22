import { dso } from "https://deno.land/x/dso@v1.0.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Config } from "https://raw.githubusercontent.com/eankeen/config/master/mod.ts";

const database: any = await Config.load({
  file: "mysql",
  searchDir: `${Deno.cwd()}/src`,
});

const {
  DBAAS_MYSQL_DATABASE,
  DBAAS_MYSQL_USER,
  DBAAS_MYSQL_PASSWORD,
  DBAAS_MYSQL_HOSTS,
  DBAAS_MYSQL_PORT,
  ENV,
} = config();

if (
  !DBAAS_MYSQL_DATABASE ||
  !DBAAS_MYSQL_USER ||
  !DBAAS_MYSQL_PASSWORD ||
  !DBAAS_MYSQL_HOSTS ||
  !DBAAS_MYSQL_PORT ||
  !ENV
) {
  throw new Error(`Verify that .env file exists in the env folder`);
}

database.hostname = DBAAS_MYSQL_HOSTS;
database.port = parseInt(DBAAS_MYSQL_PORT);
database.username = DBAAS_MYSQL_USER;
database.password = DBAAS_MYSQL_PASSWORD;
database.db = DBAAS_MYSQL_DATABASE;

dso.showQueryLog = true;

const mysql = dso.connect(database);

export default mysql;
