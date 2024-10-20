// const { app } = require("./src/app.ts");
import app from "./src/app";
const port = process.env.PORT || 3000;

// Server
app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
