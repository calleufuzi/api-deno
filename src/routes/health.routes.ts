import { Router } from "https://deno.land/x/oak/mod.ts";

export const HealthRouter = (router: Router) => {
  router.get("/health", ({ response }: { response: any }) => {
    response.body = {
      mgs: "Server running with " + Deno.env.get("HOST") + " configuration.",
    };
    response.status = 200;
  });

  return router;
};
