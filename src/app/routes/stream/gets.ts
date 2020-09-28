import { Request, Response, NextFunction } from "express";
import { Stream } from "../../models";

export default (request: Request, response: Response, next: NextFunction) => {
  Stream.find()
    .then((streams) => response.json(streams))
    .catch((error) => next(new Error(error.name)));
};
