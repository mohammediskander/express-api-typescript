import { Request, Response, NextFunction } from "express";
import { File } from "../../models";

export default (request: Request, response: Response, next: NextFunction) => {
  new File({
    data: request.body.file,
    dataType: "testing?",
  })
    .save()
    .then((_file) => {
      response.json({ message: "File has been saved successfully!", _file });
    })
    .catch((error) => {
      next(new Error(error.name));
    });
};
