import { Request, Response, NextFunction } from "express";
import * as Interfaces from "../interfaces";

export const CatchAsync = (fn: Interfaces.Controller.Async) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
