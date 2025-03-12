import express from "express";
import morgan from "morgan";
import process from "node:process";
const app = express();
app.use(morgan("combined"));

const message = process.env.MESSAGE || "Hello World";

app.get("/", function (_req, res) {
  res.send(`${message}\n`);
});

console.log("Hello World application has started on port 3000");
console.log("Powered by a bunch of small penguins...");
app.listen(3000);
