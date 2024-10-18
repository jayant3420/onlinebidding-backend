import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(
    "<center><h2><b>Hi, This is Test Service.<br><i> How can i help you ;)</i></b></h2></center>"
  );
});

export default app;
