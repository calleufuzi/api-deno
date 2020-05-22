import { config } from "https://deno.land/x/dotenv/mod.ts";
import app from "../app.ts";

const { HOST, PORT } = config();
console.log(`Listening on Port ${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);
