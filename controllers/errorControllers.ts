import { Response } from "express";

export default (err:any, res:Response, ) => {
  return res.status(err.statusCode || 500).json({
    status: err.status || "Internal Server Error",
    message: err.message || "Please retry",
  });
};
