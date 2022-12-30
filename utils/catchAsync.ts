import { Request, Response, NextFunction } from "express";
import * as Interfaces from "../interfaces";

const CatchAsync = (fn: Interfaces.Controller.Async) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

export default CatchAsync;