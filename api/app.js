import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Debug from "debug";
import express from "express";
import logger from "morgan";
import path from "path";

const app = express();
const debug = Debug("api:app");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/helloworld", (req, res) => {
  res.json({ ok: true });
});

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json(err);
});

// Handle uncaughtException
process.on("uncaughtException", err => {
  debug("Caught exception: %j", err);
  process.exit(1);
});

export default app;
