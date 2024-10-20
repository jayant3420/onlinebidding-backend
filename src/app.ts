import express, { Request, Response } from "express";
import user from "./route/user/user.routes";
import publicRoutes from "./route/public";
import { errorHandler } from "./middleware/error.handler";

const app = express();
app.use(
  express.urlencoded({ parameterLimit: 100000, limit: "25mb", extended: true })
);
app.use(express.json({ limit: "25mb", type: "application/json" }));

app.get("/", (req: Request, res: Response) => {
  res.send(
    "<center><h2><b>Hi, This is Test Service.<br><i> How can i help you ;)</i></b></h2></center>"
  );
});


app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  console.log('Content-Length:', req.headers['content-length']);
  let body = '';
  
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    console.log('Actual Body Size:', Buffer.byteLength(body));
    next();
  });
});



console.log("hjiiiii");
// app.use("/api/v1", publicRoutes);
// app.use("/api/v1/user", user);

app.use(errorHandler);

export default app;
