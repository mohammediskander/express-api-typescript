import { Request, Response, NextFunction } from "express";
import { File as _File } from "../../models";

export default (request: Request, response: Response, next: NextFunction) => {
  _File
    .find()
    .select({ data: 0 })
    .then((files) => {
      if (files.length === 0) {
        response.status(404);
        next(new Error("notFound"));
      } else {
        response.json(files);
      }
    })
    .catch((error) => {
      response.status(400);
      next(error);
    });
};
