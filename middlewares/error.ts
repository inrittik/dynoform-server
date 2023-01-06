import { Response, NextFunction } from "express";

const errorHandler = (err: any, res: Response, next: NextFunction) => {
  let { statusCode, message } = err;

  res.locals.errorMessage = err.message;
  const response = {
    success: false,
    message,
    error: {
      errorCode: statusCode,
      ...{ errorMessage: err.stack },
    },
  };
  res.status(statusCode).send(response);
  next();
};

export { errorHandler };
