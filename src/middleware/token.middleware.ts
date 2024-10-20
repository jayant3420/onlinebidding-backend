import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Define a custom interface for the Request to include the user property
interface AuthenticatedRequest extends Request {
    user?: any;
}

// Middleware to check if the user is authenticated
export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access denied, token missing' });
    }

    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        // Token is valid, store user info in req object
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    });
};