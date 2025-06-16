import { NextFunction, Request, RequestHandler, Response } from "express";

const asyncHandler = (
  requestHandler: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction): Promise<void> => {
    return Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: String(error) });
      }
    });
  };
};

export { asyncHandler };
