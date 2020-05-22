# Deno REST API

## Description:

This is basic boiler plate in contruction for REST API with Deno

## Init

### Prerequisite

- Deno > 1.0
- Mysql = 5.7
- Typescrip

### Configuring

Duplicate .env.exemple file and rename it to .env, fill the env informations

Run above commands:

````

Create Dadabase and run ORM comands:

``Migrate``
```deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate```

````

### Running

```
> deno run --inspect -A --allow-env --unstable -c tsconfig.json src/bin/www.ts
```

### Using Nessie ORM - https://github.com/halvardssm/deno-nessie

## Usage

- `init`: Generates a `nessie.config.ts` file

  `deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts init`

- `make [name]`: Create migration

  `deno run --allow-net --allow-read --allow-write https://deno.land/x/nessie/cli.ts make create_users`

- `migrate`: Run migration - will migrate all migrations in your migration folder (sorted by timestamp) newer than the latest migration in your db

  `deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate`

  `deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts migrate -c ./nessie.config.ts`

- `rollback`: Rollback - will rollback the latest migration

  `deno run --allow-net --allow-read https://deno.land/x/nessie/cli.ts rollback`

### Flags

- `-c, --config`: Path to config file, will default to ./nessie.config.ts
- `-d, --debug`: Enables verbose output
