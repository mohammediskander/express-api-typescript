import { Request, Response, NextFunction } from "express";
import { Stream as _Stream } from "../../models";

export default (request: Request, response: Response, next: NextFunction) => {
  new _Stream({
    title: request.body.title,
    userId: request.body.userId,
    description: request.body.description,
  })
    .save()
    .then((stream) => response.json(stream))
    .catch((error) => next(new Error(error.name)));
};
