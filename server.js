const express = require("express");
const next = require("next");
const dotenv = require("dotenv");

dotenv.config();

const routes = require("./src/routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, dir: "./src" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  server.use(handler);

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
