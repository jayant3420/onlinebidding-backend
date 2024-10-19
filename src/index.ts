import dotenv from 'dotenv';
dotenv.config();

import app from "./app";
import serverless from 'serverless-http';


// Export the app as a serverless function
module.exports.handler = serverless(app);