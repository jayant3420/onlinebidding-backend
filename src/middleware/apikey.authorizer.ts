import { NextFunction, Request, Response } from "express";

export const apiKeyAuthorizer = (req: Request, res: Response, next: NextFunction) => {
    const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY;
    const apiKey = req.headers["x-api-key"];

    if (apiKey && apiKey === PUBLIC_API_KEY) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized: Invalid or missing API key" });
    }
};