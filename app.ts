import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { createServer } from "http";
import * as Routers from "@routes";
import * as Middlewares from "@middlewares";
import * as Controllers from "@controllers";

const app = express();
app.use(morgan("short"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ALLOWED_ORIGINS = ["http://localhost:3000"];
app.use(cors({ origin: ALLOWED_ORIGINS, credentials: true }));

const httpServer = createServer(app);

app.use((req, res, next) => {
  const { origin } = req.headers;
  const theOrigin =
    ALLOWED_ORIGINS.indexOf(<string>origin) >= 0 ? origin : ALLOWED_ORIGINS[0];
  res.header("Access-Control-Allow-Origin", theOrigin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE,OPTIONS,HEAD");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.options("*", cors());

app.use("/form", Routers.FormRouter.default);
app.use("/user", Routers.UserRouter.default);
app.use("/field", Routers.FieldRouter.default);


app.use(Middlewares.Error.errorHandler);

app.use(Controllers.ErrorControllers.default);

module.exports = { httpServer };
