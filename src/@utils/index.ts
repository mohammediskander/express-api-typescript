import Sharp from "sharp";

class Utils {
  static heightResize = (Image: any, height: number): any => {
    return new Promise((resolve, reject) => {
      Sharp(new Buffer(Image, "base64"))
        .resize({ height })
        .toBuffer()
        .then((resizedImage) => {
          resolve(resizedImage);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  static widthResize = (Image: any, width: number, height?: number): any => {
    return new Promise((resolve, reject) => {
      Sharp(new Buffer(Image, "base64")).resize({
        width,
        height: height || null,
      });
    });
  };
}
