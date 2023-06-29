import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { character } from "./resolvers/get.ts";



const router = new Router();

router
.get("/character/:id" , character)


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 7777 });
