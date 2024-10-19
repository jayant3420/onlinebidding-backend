import express, { Request, Response } from "express";
import user from "./route/user/user.routes";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(
    "<center><h2><b>Hi, This is Test Service.<br><i> How can i help you ;)</i></b></h2></center>"
  );
});

app.use("/api/v1/user", user);

export default app;
