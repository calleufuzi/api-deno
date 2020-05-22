import {
  Application,
  send,
  isHttpError,
  Status,
  Router,
} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { Config } from "https://raw.githubusercontent.com/eankeen/config/master/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const { ENV } = config();
const { cors, api_prefix }: any = await Config.load({
  file: ENV,
  searchDir: `${Deno.cwd()}/src`,
});

// Import Routes
import { AuthRouter } from "./routes/auth.routes.ts";
import { UserRouter } from "./routes/user.routes.ts";
import { HealthRouter } from "./routes/health.routes.ts";

const app = new Application();
const router = new Router();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          ctx.response.status = 404;
          ctx.response.body = { message: err.message };
          break;
        case Status.BadRequest:
          ctx.response.status = 400;
          ctx.response.body = { message: err.message };
          break;
        case Status.InternalServerError:
          ctx.response.status = 500;
          ctx.response.body = { message: "Sorry, something is wrong" };
          break;
        default:
        // handle other statuses
      }
    } else {
      // rethrow if you can't handle the error
      ctx.response.status = 500;
      ctx.response.body = { message: "Sorry, something is wrong" };
    }
  }
});

// Enable Static Folder
// app.use(async (context) => {
//   await send(context, context.request.url.pathname, {
//     root: `${Deno.cwd()}/src/public`,
//     index: "src/public/index.html",
//   });
// });

// Enable CORS for All Routes
// app.use(oakCors(cors));

// Health Check
HealthRouter(router);

// Login Middleware
//TODO: Criar middleware de autenticação

//  Load Routes
AuthRouter(router);
UserRouter(api_prefix, router);

app.use(router.routes());
app.use(router.allowedMethods());



export default app;
