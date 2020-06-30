import { Application, Request, Response, NextFunction } from "express";
import Translation from "../@utils/translation";
import Validation, { ValidationsInterface } from "../@utils/validation";

export interface RouteInterface {
  path: string;
  function: Function;
  description?: string;
  enabled: boolean;
  roles?: object[];
  access: "public" | "private";
  method: "post" | "get" | "patch" | "delete";
  validation?: ValidationsInterface;
}

interface ExceptionHandler {
  message: string;
  status: number;
}

declare global {
  namespace Express {
    export interface Request {
      error: ExceptionHandler;
    }
  }
}

class Routes {
  private routes: RouteInterface[];
  // private server: ServerInterface[];
  private server: Application;

  constructor(server: Application, routes: RouteInterface[]) {
    this.setRoutes(routes);
    this.setServer(server);
  }

  // SETTERS

  private setServer = (server: Application) => {
    this.server = server;
  };

  private setRoutes = (routes: RouteInterface[]) => {
    this.routes = routes;
    return this;
  };

  // GETTERS
  private getServer = (): Application => {
    return this.server;
  };

  private getRoutes = (): RouteInterface[] => {
    return this.routes;
  };

  public configureRoutes = (): void => {
    this.getRoutes().forEach((route: RouteInterface) => {
      if (route.enabled) {
        this.getServer()[route.method](
          route.path,
          (request: Request, response: Response, next: NextFunction) => {
            console.log(`URL: ${request.url}`);
            next();
          },
          (request: Request, response: Response, next: NextFunction) => {
            const validation = new Validation(route.validation, request.body);
            try {
              validation.validateAll();
              next();
            } catch (error) {
              const translate = new Translation("ar");
              response
                .status(error.status)
                .send(
                  `${translate.getMessage(error.key)} ${translate.getMessage(
                    error.message
                  )}`
                );
            }
            next();
          },
          (
            request: Express.Request,
            response: Response,
            next: NextFunction
          ) => {
            route.function(request, response, next);
          },
          (
            request: Request<any, any, any>,
            response: Response,
            next: NextFunction
          ) => {
            response
              .status(request.error.status)
              .send(new Translation("ar").getMessage(request.error.message));
          }
        );
      }
    });
  };
}

export default Routes;
