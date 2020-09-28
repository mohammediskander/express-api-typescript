import { Request, Response, NextFunction } from "express";
import { Stream } from "../../models";

export default (request: Request, response: Response, next: NextFunction) => {
  Stream.findById(request.params._id)
    .then((stream) => response.json(stream))
    .catch((error) => next(new Error(error.name)));
};
