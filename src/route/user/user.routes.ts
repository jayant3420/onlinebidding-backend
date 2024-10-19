import { Router, Request, Response } from "express";
const db = require("../../../models");
const route = Router();

route.get("/detail", async (req: Request, res: Response) => {
  try {
    // const params = req.query;

    const result = await db.users.findAll();
    console.log("result ==>>", result);
    res.status(200).send(result)
  } catch (err) {
    console.log("error ==>>", err);
  }
});

export default route;
