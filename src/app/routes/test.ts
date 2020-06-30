import { Request, Response, NextFunction } from "express";

export default (request: Request, response: Response, next: NextFunction) => {
  // request.body;

  // if (request.query.test)
  //   request.error = {
  //     message: "test is exist",
  //     status: 200,
  //   };
  // else
  //   request.error = {
  //     message: "unkownErrorException",
  //     status: 400,
  //   };

  response.json(request.body);

  // next();
};
