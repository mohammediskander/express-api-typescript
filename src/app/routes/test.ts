import { Request, Response, NextFunction } from "express";
import { createSession } from "net-ping";
import { lookup } from "dns";

export default (request: Request, response: Response, next: NextFunction) => {
  lookup("alexsander.me", (error, address, family) => {
    if (error) return response.json({ error: error.toString() });
    createSession().pingHost(address, (_error: any, target: any) => {
      if (_error) response.json({ error: error.toString() });
      else response.json({ host: target, status: "up" });
    });
  });
};
