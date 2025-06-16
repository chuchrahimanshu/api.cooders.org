import { NextFunction, Request, RequestHandler, Response } from "express";

const asyncHandler = (requestHandler: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      requestHandler(req, res, next);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({
          message: error.message,
        });
      } else {
        return res.status(500).json({
          message: error,
        });
      }
    }
  };
};

export { asyncHandler };
