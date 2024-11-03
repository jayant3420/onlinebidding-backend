import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import publicRoutes from "./route/public";
import product from "./route/product/product.routes";
import bid from "./route/bid/bid.routes";
import { errorHandler } from "./middleware/error.handler";
import cors, { CorsOptions } from "cors";

const app = express();

const corsOptions: CorsOptions = {
  origin: "http://localhost:3600",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "x-api-key"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(
  express.urlencoded({ parameterLimit: 100000, limit: "25mb", extended: true })
);
app.use(express.json({ limit: "25mb", type: "application/json" }));

app.get("/", (req: Request, res: Response) => {
  res.send(
    "<center><h2><b>Hi, This is Test Service.<br><i> How can i help you ;)</i></b></h2></center>"
  );
});

app.use("/api/v1", publicRoutes);
app.use("/api/v1/product", product);
app.use("/api/v1/bid", bid);

app.use(errorHandler);

export default app;
