import { Request, Response, NextFunction } from "express";
import { Stream } from "../../models";

export default (request: Request, response: Response, next: NextFunction) => {
  Stream.findByIdAndUpdate(
    request.params._id,
    { title: request.body.title, description: request.body.description },
    { new: true }
  )
    .then((stream) => response.json(stream))
    .catch((error) => next(new Error(error.name)));
};
