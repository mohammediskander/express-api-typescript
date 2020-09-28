// ! TEST ID: 5f083783d1ce074d9c44c317

import { Request, Response, NextFunction } from "express";
import { File as _File } from "../../models";
import Sharp from "sharp";

export default (request: Request, response: Response, next: NextFunction) => {
  let [_id, size] = request.params._id.split("@");

  // TODO: Customize image resolution based on URL, example (/api/v1/image/5f083783d1ce074d9c44c317@2x, /api/v1/image/5f083783d1ce074d9c44c317@90x90)

  _File
    .findById(_id)
    .then((file: any) => {
      if (!file) {
        response.status(404);
        next(new Error("notFound"));
      } else {
        const data = file.data.split(",");
        if (!size) size = "100";
        let [height, width] = size.split("x");
        if (!height) height = "100";
        if (!width) width = height;

        Sharp(Buffer.from(data[1], "base64"))
          .resize({
            height: Number(height),
            width: Number(width),
          })
          .toBuffer()
          .then((resizedImage) => {
            response.contentType(data[0].split(":")[1]).send(resizedImage);
          });

        // .send(Buffer.from(image, "base64"));
      }
    })
    .catch((error) => {
      response.status(400);
      next(new Error(error.name));
    });
};
