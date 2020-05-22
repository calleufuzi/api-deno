const configPg = {
  migrationFolder: `./migrations`,
  connection: {
    database: "nessie",
    hostname: "localhost",
    port: 5432,
    user: "root",
    password: "pwd",
  },
  dialect: "pg",
};

const configMySql = {
  migrationFolder: `./src/db/migrations/mysql`,
  connection: {
    hostname: "localhost",
    port: 3306,
    username: "root",
    password: "653676",
    db: "dino",
  },
  dialect: "mysql",
};

const configSqLite = {
  migrationFolder: `./migrations`,
  connection: "sqlite.db",
  dialect: "sqlite",
};

export default configMySql;
