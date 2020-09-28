import test from "./test";
import { RouteInterface } from "../../@utils/routes";
import image from "./image";
import stream from "./stream";

const routes: RouteInterface[] = [
  {
    access: "public",
    description: "TESTING",
    enabled: true,
    function: test,
    method: "get",
    path: "/test.aspx",
  },
  ...image,
  ...stream,
];

export default routes;
