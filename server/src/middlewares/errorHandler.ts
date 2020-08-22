import express from "express";

const errorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): express.Response => {
  if (err.name === "NotFoundError") {
    return res.status(404).json({
      error: err.message,
    });
  }

  if (err.name === "InvalidError") {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    error: err.message || "Internal server error!",
  });
};

export default errorHandler;
