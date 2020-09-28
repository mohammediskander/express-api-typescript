import { Request, Response, NextFunction } from "express";
import { Stream } from "../../models";

export default (request: Request, response: Response, next: NextFunction) => {
  Stream.findByIdAndDelete(request.params._id)
    .then(() => response.json({ success: true }))
    .catch((error) => next(new Error(error.name)));
};
